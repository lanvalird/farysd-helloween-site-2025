export type SkillInfo = { name: string; description: string };

export class Skill {
  private readonly _name: string;
  private readonly _description: string;

  private _value: number;

  constructor(name: string, description: string, count = 0) {
    this._name = name;
    this._description = description;
    this._value = count;
  }

  get name(): string {
    return this._name;
  }
  get description(): string {
    return this._description;
  }
  get value(): number {
    return this._value;
  }
  set value(newValue: number) {
    this._value = Math.max(0, Math.min(10, newValue));
  }

  public changeValue(delta: number): void {
    this.value = this._value + delta;
  }

  public getPercent(): number {
    return (this.value / 10) * 100;
  }
}
