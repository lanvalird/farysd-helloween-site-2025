import type { QuizAnswer } from "./Answer";

export class QuizQuestion {
  private _id: number;
  private _text: string;
  private _answers: QuizAnswer[];

  constructor(id: number, text: string, answers: QuizAnswer[]) {
    this._id = id;
    this._text = text;
    this._answers = answers;
  }

  public get id(): number {
    return this._id;
  }
  public get text(): string {
    return this._text;
  }
  public get answers(): QuizAnswer[] {
    return this._answers;
  }
}
