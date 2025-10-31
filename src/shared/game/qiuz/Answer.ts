import type { SkillEffect } from "../../types";

export class QuizAnswer {
  private _text: string;
  private _effect: SkillEffect;

  constructor(text: string, effect: SkillEffect) {
    this._text = text;
    this._effect = effect;
  }

  public get text(): string {
    return this._text;
  }
  public get effect(): SkillEffect {
    return this._effect;
  }
}
