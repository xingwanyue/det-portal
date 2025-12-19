import db from "../utils/db";
import { signJwt } from "../utils";

interface LoginBody {
  username?: string;
  password?: string;
}

export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) as LoginBody;
  const username = body.username?.trim();
  const password = body.password?.trim();

  if (!username || !password) {
    throw createError({ statusCode: 400, statusMessage: "请输入用户名和密码" });
  }

  const user = await db("user")
    .select(["id", "username", "password"])
    .where({ username })
    .first();

  if (!user || user.password !== password) {
    throw createError({ statusCode: 401, statusMessage: "用户名或密码错误" });
  }

  const token = signJwt({ userId: user.id });

  return { token };
});
