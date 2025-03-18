import course from './course';
import home from './home';
import mockExam from './mockExam';
import duolingoPracticeTest from './duolingoPracticeTest';
import practice from './practice';
import speakingAiCorrection from './speakingAiCorrection';
import writingAiCorrection from './writingAiCorrection';

export default {
  '/courses': course,
  '/': home,
  '/mock-exam': mockExam,
  '/duolingo-practice-test': duolingoPracticeTest,
  '/practice': practice,
  '/speaking-ai-correction': speakingAiCorrection,
  '/writing-ai-correction': writingAiCorrection,
} as Record<string, any>;
