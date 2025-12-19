import crypto from 'crypto';
import { Buffer } from 'node:buffer';
import _ from 'lodash';

const config = useRuntimeConfig()

const saltChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const saltCharsLen = saltChars.length;

export const generateSalt = (l = 6) => {
  const arr = [];
  const maxLen = saltCharsLen - 1;
  for (let i = 0; i < l; i++) {
    arr.push(saltChars[_.random(0, maxLen)]);
  }
  return arr.join('');
};

export const generatePw = (pw: string, salt: string) => {
  const md5 = crypto.createHash('md5');
  md5.update([_.toLower(pw), salt].join(config.secret));
  return md5.digest('hex');
};

const base64UrlEncode = (input: string) =>
  Buffer.from(input)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '');

export const signJwt = (
  payload: Record<string, unknown>,
  expiresInSeconds = 60 * 60 * 8
) => {
  const header = { alg: 'HS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const body = { ...payload, iat: now, exp: now + expiresInSeconds };
  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(body));
  const signature = crypto
    .createHmac('sha256', config.secret)
    .update(`${encodedHeader}.${encodedPayload}`)
    .digest('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '');
  return `${encodedHeader}.${encodedPayload}.${signature}`;
};

const base64UrlDecode = (input: string) => {
  const normalized = input.replace(/-/g, '+').replace(/_/g, '/');
  const padded = normalized.padEnd(
    normalized.length + ((4 - (normalized.length % 4)) % 4),
    '='
  );
  return Buffer.from(padded, 'base64').toString('utf-8');
};

export const verifyJwt = (token: string) => {
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  const [encodedHeader, encodedPayload, signature] = parts;
  const expected = crypto
    .createHmac('sha256', config.secret)
    .update(`${encodedHeader}.${encodedPayload}`)
    .digest('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '');
  if (expected !== signature) return null;
  const payload = JSON.parse(base64UrlDecode(encodedPayload)) as Record<
    string,
    unknown
  >;
  const exp = typeof payload.exp === 'number' ? payload.exp : undefined;
  if (exp && exp < Math.floor(Date.now() / 1000)) return null;
  return payload;
};
