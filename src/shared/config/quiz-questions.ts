import { QuizAnswer } from "../game/qiuz/Answer";
import { QuizQuestion } from "../game/qiuz/Question";
import { SKILL_NAMES } from "./constants";

export const quizQuestions = [
  new QuizQuestion(1, "Ты находишь загадочную тыкву. Твои действия?", [
    new QuizAnswer("Изучаю вдоль и поперёк", {
      [SKILL_NAMES.INTELLECT]: 2,
      [SKILL_NAMES.CHARISMA]: -1,
      [SKILL_NAMES.POPULARITY]: 0,
      [SKILL_NAMES.DETERMINATION]: 0,
      [SKILL_NAMES.SIGNIFICANCE]: 0,
    }),
    new QuizAnswer("Мелаю дем (делаю мем)", {
      [SKILL_NAMES.INTELLECT]: 0,
      [SKILL_NAMES.CHARISMA]: 2,
      [SKILL_NAMES.POPULARITY]: 1,
      [SKILL_NAMES.DETERMINATION]: 0,
      [SKILL_NAMES.SIGNIFICANCE]: 0,
    }),
    new QuizAnswer("А-а-а-а, тыква! (убежишь)", {
      [SKILL_NAMES.INTELLECT]: 0,
      [SKILL_NAMES.CHARISMA]: 1,
      [SKILL_NAMES.POPULARITY]: 0,
      [SKILL_NAMES.DETERMINATION]: -2,
      [SKILL_NAMES.SIGNIFICANCE]: -1,
    }),
  ]),

  new QuizQuestion(2, "Завтра дедлайн, а начальник...", [
    new QuizAnswer("Тыква", {
      [SKILL_NAMES.INTELLECT]: -1,
      [SKILL_NAMES.CHARISMA]: 2,
      [SKILL_NAMES.POPULARITY]: 0,
      [SKILL_NAMES.DETERMINATION]: 0,
      [SKILL_NAMES.SIGNIFICANCE]: 1,
    }),
    new QuizAnswer("Какой-то Валя", {
      [SKILL_NAMES.INTELLECT]: 0,
      [SKILL_NAMES.CHARISMA]: 0,
      [SKILL_NAMES.POPULARITY]: 1,
      [SKILL_NAMES.DETERMINATION]: -2,
      [SKILL_NAMES.SIGNIFICANCE]: 1,
    }),
    new QuizAnswer("ЛЮБА!!!", {
      [SKILL_NAMES.INTELLECT]: 2,
      [SKILL_NAMES.CHARISMA]: -3,
      [SKILL_NAMES.POPULARITY]: 1,
      [SKILL_NAMES.DETERMINATION]: 1,
      [SKILL_NAMES.SIGNIFICANCE]: 0,
    }),
  ]),
];
