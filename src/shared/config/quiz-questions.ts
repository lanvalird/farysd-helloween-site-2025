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

  // Новые вопросы
  new QuizQuestion(3, "В чате Фейри кто-то спрашивает 'скинь ножки'. Твоя реакция?", [
    new QuizAnswer("Игнорирую, это же ловушка!", {
      [SKILL_NAMES.INTELLECT]: 1,
      [SKILL_NAMES.CHARISMA]: -1,
      [SKILL_NAMES.POPULARITY]: -1,
      [SKILL_NAMES.DETERMINATION]: 2,
      [SKILL_NAMES.SIGNIFICANCE]: 0,
    }),
    new QuizAnswer("Отправляю фото куриных ножек", {
      [SKILL_NAMES.INTELLECT]: 0,
      [SKILL_NAMES.CHARISMA]: 3,
      [SKILL_NAMES.POPULARITY]: 2,
      [SKILL_NAMES.DETERMINATION]: 0,
      [SKILL_NAMES.SIGNIFICANCE]: -1,
    }),
    new QuizAnswer("Отправляю Шрека 😏", {
      [SKILL_NAMES.INTELLECT]: 2,
      [SKILL_NAMES.CHARISMA]: -2,
      [SKILL_NAMES.POPULARITY]: -1,
      [SKILL_NAMES.DETERMINATION]: 1,
      [SKILL_NAMES.SIGNIFICANCE]: 1,
    }),
    new QuizAnswer("Банхаммер в руки и вперёд!", {
      [SKILL_NAMES.INTELLECT]: -1,
      [SKILL_NAMES.CHARISMA]: 0,
      [SKILL_NAMES.POPULARITY]: 1,
      [SKILL_NAMES.DETERMINATION]: 3,
      [SKILL_NAMES.SIGNIFICANCE]: 2,
    }),
  ]),

  new QuizQuestion(4, "Ты видишь, как Фокус-Покус превращается в тянку. Твои мысли?", [
    new QuizAnswer("Нормально же общались...", {
      [SKILL_NAMES.INTELLECT]: 1,
      [SKILL_NAMES.CHARISMA]: -1,
      [SKILL_NAMES.POPULARITY]: 0,
      [SKILL_NAMES.DETERMINATION]: -1,
      [SKILL_NAMES.SIGNIFICANCE]: 0,
    }),
    new QuizAnswer("Давно пора!", {
      [SKILL_NAMES.INTELLECT]: 0,
      [SKILL_NAMES.CHARISMA]: 2,
      [SKILL_NAMES.POPULARITY]: 1,
      [SKILL_NAMES.DETERMINATION]: 1,
      [SKILL_NAMES.SIGNIFICANCE]: 0,
    }),
    new QuizAnswer("Интересно, как это повлияет на производительность", {
      [SKILL_NAMES.INTELLECT]: 3,
      [SKILL_NAMES.CHARISMA]: -2,
      [SKILL_NAMES.POPULARITY]: -1,
      [SKILL_NAMES.DETERMINATION]: 0,
      [SKILL_NAMES.SIGNIFICANCE]: 1,
    }),
    new QuizAnswer("Срочно делаю мем про это!", {
      [SKILL_NAMES.INTELLECT]: -1,
      [SKILL_NAMES.CHARISMA]: 3,
      [SKILL_NAMES.POPULARITY]: 2,
      [SKILL_NAMES.DETERMINATION]: 0,
      [SKILL_NAMES.SIGNIFICANCE]: -1,
    }),
    new QuizAnswer("Надо спросить у Вали, что происходит", {
      [SKILL_NAMES.INTELLECT]: 1,
      [SKILL_NAMES.CHARISMA]: 1,
      [SKILL_NAMES.POPULARITY]: 0,
      [SKILL_NAMES.DETERMINATION]: -2,
      [SKILL_NAMES.SIGNIFICANCE]: 1,
    }),
    new QuizAnswer("А Люба будет?", {
      [SKILL_NAMES.INTELLECT]: -1,
      [SKILL_NAMES.CHARISMA]: 2,
      [SKILL_NAMES.POPULARITY]: 1,
      [SKILL_NAMES.DETERMINATION]: -1,
      [SKILL_NAMES.SIGNIFICANCE]: 1,
    }),
  ]),

  new QuizQuestion(5, "Хэллоуинская вечеринка в Фейри. Твой костюм?", [
    new QuizAnswer("Классическая тыква", {
      [SKILL_NAMES.INTELLECT]: -1,
      [SKILL_NAMES.CHARISMA]: 1,
      [SKILL_NAMES.POPULARITY]: 0,
      [SKILL_NAMES.DETERMINATION]: 0,
      [SKILL_NAMES.SIGNIFICANCE]: -1,
    }),
    new QuizAnswer("Злой Валя с молотком", {
      [SKILL_NAMES.INTELLECT]: 0,
      [SKILL_NAMES.CHARISMA]: 2,
      [SKILL_NAMES.POPULARITY]: 1,
      [SKILL_NAMES.DETERMINATION]: 2,
      [SKILL_NAMES.SIGNIFICANCE]: 0,
    }),
    new QuizAnswer("Приведение с дедлайнами", {
      [SKILL_NAMES.INTELLECT]: 2,
      [SKILL_NAMES.CHARISMA]: -1,
      [SKILL_NAMES.POPULARITY]: 0,
      [SKILL_NAMES.DETERMINATION]: -1,
      [SKILL_NAMES.SIGNIFICANCE]: 1,
    }),
    new QuizAnswer("Люба с кофе и тасками (очень страшно)", {
      [SKILL_NAMES.INTELLECT]: 1,
      [SKILL_NAMES.CHARISMA]: -2,
      [SKILL_NAMES.POPULARITY]: 1,
      [SKILL_NAMES.DETERMINATION]: 3,
      [SKILL_NAMES.SIGNIFICANCE]: 2,
    }),
    new QuizAnswer("Не пойду, надо баги фиксить", {
      [SKILL_NAMES.INTELLECT]: 2,
      [SKILL_NAMES.CHARISMA]: -3,
      [SKILL_NAMES.POPULARITY]: -2,
      [SKILL_NAMES.DETERMINATION]: 2,
      [SKILL_NAMES.SIGNIFICANCE]: 0,
    }),
    new QuizAnswer("А? Я уже играю!", {
      [SKILL_NAMES.INTELLECT]: 1,
      [SKILL_NAMES.CHARISMA]: 3,
      [SKILL_NAMES.POPULARITY]: 1,
      [SKILL_NAMES.DETERMINATION]: 1,
      [SKILL_NAMES.SIGNIFICANCE]: 2,
    }),
  ]),

  new QuizQuestion(6, "Обнаружил критический баг в продакшене. Время действий!", [
    new QuizAnswer("Как разработчик —— срочно пушим фиксы без код-ревью", {
      [SKILL_NAMES.INTELLECT]: -2,
      [SKILL_NAMES.CHARISMA]: 0,
      [SKILL_NAMES.POPULARITY]: -1,
      [SKILL_NAMES.DETERMINATION]: 3,
      [SKILL_NAMES.SIGNIFICANCE]: 1,
    }),
    new QuizAnswer("АДМИНЫ, ВЫ ГДЕ, ТУТ БЯКА", {
      [SKILL_NAMES.INTELLECT]: -1,
      [SKILL_NAMES.CHARISMA]: 2,
      [SKILL_NAMES.POPULARITY]: 1,
      [SKILL_NAMES.DETERMINATION]: 1,
      [SKILL_NAMES.SIGNIFICANCE]: 2,
    }),
    new QuizAnswer("Делаю вид, что не заметил", {
      [SKILL_NAMES.INTELLECT]: -1,
      [SKILL_NAMES.CHARISMA]: 1,
      [SKILL_NAMES.POPULARITY]: -2,
      [SKILL_NAMES.DETERMINATION]: -3,
      [SKILL_NAMES.SIGNIFICANCE]: -2,
    }),
    new QuizAnswer("Круто и нудно пишу, почему и как исправить баг", {
      [SKILL_NAMES.INTELLECT]: 3,
      [SKILL_NAMES.CHARISMA]: -1,
      [SKILL_NAMES.POPULARITY]: -1,
      [SKILL_NAMES.DETERMINATION]: 0,
      [SKILL_NAMES.SIGNIFICANCE]: 1,
    }),
    new QuizAnswer("Виноват Валя!", {
      [SKILL_NAMES.INTELLECT]: -2,
      [SKILL_NAMES.CHARISMA]: 0,
      [SKILL_NAMES.POPULARITY]: -1,
      [SKILL_NAMES.DETERMINATION]: -1,
      [SKILL_NAMES.SIGNIFICANCE]: -1,
    }),
  ]),

  new QuizQuestion(7, "Фейри внезапно закрывается. Твоя первая реакция?", [
    new QuizAnswer("Бегу спасать родной мой Фейри!", {
      [SKILL_NAMES.INTELLECT]: 2,
      [SKILL_NAMES.CHARISMA]: -1,
      [SKILL_NAMES.POPULARITY]: 0,
      [SKILL_NAMES.DETERMINATION]: 3,
      [SKILL_NAMES.SIGNIFICANCE]: 1,
    }),
    new QuizAnswer("Создаю мем 'RIP Фейри'", {
      [SKILL_NAMES.INTELLECT]: -1,
      [SKILL_NAMES.CHARISMA]: 3,
      [SKILL_NAMES.POPULARITY]: 2,
      [SKILL_NAMES.DETERMINATION]: 0,
      [SKILL_NAMES.SIGNIFICANCE]: -1,
    }),
    new QuizAnswer("Протестую! Грхм, позвольте высказаться...", {
      [SKILL_NAMES.INTELLECT]: 0,
      [SKILL_NAMES.CHARISMA]: 2,
      [SKILL_NAMES.POPULARITY]: 3,
      [SKILL_NAMES.DETERMINATION]: 2,
      [SKILL_NAMES.SIGNIFICANCE]: 2,
    }),
    new QuizAnswer("заполняю анкету об уходе", {
      [SKILL_NAMES.INTELLECT]: 1,
      [SKILL_NAMES.CHARISMA]: -2,
      [SKILL_NAMES.POPULARITY]: -1,
      [SKILL_NAMES.DETERMINATION]: 1,
      [SKILL_NAMES.SIGNIFICANCE]: 0,
    }),
    new QuizAnswer("Это просто апрельская шутка... правда?", {
      [SKILL_NAMES.INTELLECT]: 0,
      [SKILL_NAMES.CHARISMA]: 1,
      [SKILL_NAMES.POPULARITY]: -1,
      [SKILL_NAMES.DETERMINATION]: -2,
      [SKILL_NAMES.SIGNIFICANCE]: -1,
    }),
    new QuizAnswer("Пф, чтобы Фейри закрылся?! Ты сейчас шутишь?", {
      [SKILL_NAMES.INTELLECT]: 0,
      [SKILL_NAMES.CHARISMA]: -1,
      [SKILL_NAMES.POPULARITY]: 0,
      [SKILL_NAMES.DETERMINATION]: 0,
      [SKILL_NAMES.SIGNIFICANCE]: 1,
    }),
  ]),

  new QuizQuestion(8, "Ты стал главным по Хэллоуину в Фейри. Твой план?", [
    new QuizAnswer("Го ивент, где мы ломаем серв????", {
      [SKILL_NAMES.INTELLECT]: 2,
      [SKILL_NAMES.CHARISMA]: 1,
      [SKILL_NAMES.POPULARITY]: 1,
      [SKILL_NAMES.DETERMINATION]: 0,
      [SKILL_NAMES.SIGNIFICANCE]: 1,
    }),
    new QuizAnswer("Массовая рассылка 'скинь ножки'", {
      [SKILL_NAMES.INTELLECT]: -2,
      [SKILL_NAMES.CHARISMA]: 3,
      [SKILL_NAMES.POPULARITY]: 2,
      [SKILL_NAMES.DETERMINATION]: 1,
      [SKILL_NAMES.SIGNIFICANCE]: -1,
    }),
    new QuizAnswer("Превращаю всех в тыквы на день", {
      [SKILL_NAMES.INTELLECT]: 0,
      [SKILL_NAMES.CHARISMA]: 2,
      [SKILL_NAMES.POPULARITY]: 1,
      [SKILL_NAMES.DETERMINATION]: 2,
      [SKILL_NAMES.SIGNIFICANCE]: 0,
    }),
    new QuizAnswer("Организую хакатон по созданию хэллоуинских мемов", {
      [SKILL_NAMES.INTELLECT]: 1,
      [SKILL_NAMES.CHARISMA]: 2,
      [SKILL_NAMES.POPULARITY]: 2,
      [SKILL_NAMES.DETERMINATION]: 1,
      [SKILL_NAMES.SIGNIFICANCE]: 1,
    }),
    new QuizAnswer("Добавляю блюрплов! Я так давно этого ждал!", {
      [SKILL_NAMES.INTELLECT]: 0,
      [SKILL_NAMES.CHARISMA]: 1,
      [SKILL_NAMES.POPULARITY]: 2,
      [SKILL_NAMES.DETERMINATION]: 1,
      [SKILL_NAMES.SIGNIFICANCE]: -2,
    }),
    new QuizAnswer("Ничего не делаю, всё и так работает", {
      [SKILL_NAMES.INTELLECT]: -1,
      [SKILL_NAMES.CHARISMA]: -1,
      [SKILL_NAMES.POPULARITY]: -2,
      [SKILL_NAMES.DETERMINATION]: -1,
      [SKILL_NAMES.SIGNIFICANCE]: -1,
    }),
  ]),

  new QuizQuestion(9, "Твой талисман — это...", [
    new QuizAnswer("Хеллоу-блюрпл!", {
      [SKILL_NAMES.INTELLECT]: 0,
      [SKILL_NAMES.CHARISMA]: 1,
      [SKILL_NAMES.POPULARITY]: 0,
      [SKILL_NAMES.DETERMINATION]: -1,
      [SKILL_NAMES.SIGNIFICANCE]: 1,
    }),
    new QuizAnswer("Крокодил", {
      [SKILL_NAMES.INTELLECT]: 1,
      [SKILL_NAMES.CHARISMA]: -2,
      [SKILL_NAMES.POPULARITY]: -1,
      [SKILL_NAMES.DETERMINATION]: 1,
      [SKILL_NAMES.SIGNIFICANCE]: -1,
    }),
    new QuizAnswer("Ожерелье Кристи", {
      [SKILL_NAMES.INTELLECT]: 0,
      [SKILL_NAMES.CHARISMA]: 3,
      [SKILL_NAMES.POPULARITY]: -2,
      [SKILL_NAMES.DETERMINATION]: 0,
      [SKILL_NAMES.SIGNIFICANCE]: -1,
    }),
    new QuizAnswer("ПИВО, ТЫ ЧТО ТУТ ВООБЩЕ ПОНАПИСАЛ", {
      [SKILL_NAMES.INTELLECT]: 1,
      [SKILL_NAMES.CHARISMA]: -1,
      [SKILL_NAMES.POPULARITY]: 0,
      [SKILL_NAMES.DETERMINATION]: -2,
      [SKILL_NAMES.SIGNIFICANCE]: 0,
    }),
    new QuizAnswer("Воландеморт (это что за шутки?)", {
      [SKILL_NAMES.INTELLECT]: -1,
      [SKILL_NAMES.CHARISMA]: 3,
      [SKILL_NAMES.POPULARITY]: 1,
      [SKILL_NAMES.DETERMINATION]: -2,
      [SKILL_NAMES.SIGNIFICANCE]: -3,
    }),]),

  new QuizQuestion(10, "Самый главный вопрос — кого бы ты выбрал?", [
    new QuizAnswer("Валя, иди сюда!", {
      [SKILL_NAMES.INTELLECT]: 0,
      [SKILL_NAMES.CHARISMA]: 0,
      [SKILL_NAMES.POPULARITY]: 0,
      [SKILL_NAMES.DETERMINATION]: 0,
      [SKILL_NAMES.SIGNIFICANCE]: 1,
    }),
    new QuizAnswer("Любонька, Любаша 🥰", {
      [SKILL_NAMES.INTELLECT]: 1,
      [SKILL_NAMES.CHARISMA]: -1,
      [SKILL_NAMES.POPULARITY]: 0,
      [SKILL_NAMES.DETERMINATION]: 0,
      [SKILL_NAMES.SIGNIFICANCE]: 0,
    }),
    new QuizAnswer("FOCKUSTY 🎩", {
      [SKILL_NAMES.INTELLECT]: 1,
      [SKILL_NAMES.CHARISMA]: 0,
      [SKILL_NAMES.POPULARITY]: 1,
      [SKILL_NAMES.DETERMINATION]: 0,
      [SKILL_NAMES.SIGNIFICANCE]: 0,
    }),
    new QuizAnswer("Чьё имя нельзя называть", {
      [SKILL_NAMES.INTELLECT]: -1,
      [SKILL_NAMES.CHARISMA]: 1,
      [SKILL_NAMES.POPULARITY]: 2,
      [SKILL_NAMES.DETERMINATION]: 1,
      [SKILL_NAMES.SIGNIFICANCE]: -3,
    }),
    new QuizAnswer("Воландеморт (это что за шутки?)", {
      [SKILL_NAMES.INTELLECT]: -1,
      [SKILL_NAMES.CHARISMA]: 3,
      [SKILL_NAMES.POPULARITY]: 1,
      [SKILL_NAMES.DETERMINATION]: -2,
      [SKILL_NAMES.SIGNIFICANCE]: -3,
    }),])
];