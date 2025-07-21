import course from './course';
import home from './home';
import mockExam from './mockExam';
import duolingoPracticeTest from './duolingoPracticeTest';
import practice from './practice';
import speakingAiCorrection from './speakingAiCorrection';
import writingAiCorrection from './writingAiCorrection';

export default {
  '/courses': course.en,
  '/de/courses': course.de,
  '/es/courses': course.es,
  '/fr/courses': course.fr,
  '/id/courses': course.id,
  '/it/courses': course.it,
  '/ja/courses': course.ja,
  '/ko/courses': course.ko,
  '/pt/courses': course.pt,
  '/ru/courses': course.ru,
  '/th/courses': course.th,
  '/tr/courses': course.tr,
  '/zh/courses': course.zh,
  '/': home.en,
  '/de': home.de,
  '/es': home.es,
  '/fr': home.fr,
  '/id': home.id,
  '/it': home.it,
  '/ja': home.ja,
  '/ko': home.ko,
  '/pt': home.pt,
  '/ru': home.ru,
  '/th': home.th,
  '/tr': home.tr,
  '/zh': home.zh,
  '/mock-exam': mockExam,
  '/duolingo-practice-test': duolingoPracticeTest,
  '/practice': practice,
  '/speaking-ai-correction': speakingAiCorrection,
  '/writing-ai-correction': writingAiCorrection,
} as Record<string, any>;
