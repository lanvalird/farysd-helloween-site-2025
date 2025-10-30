import { Skill } from "./Skill";

export class Player {
  protected _name: string = "Spooky Gamer";
  protected _skills: Map<string, Skill> = new Map();

  constructor(name?: string) {
    name && (this._name = name);
    this.initializeSkills();
  }

  private initializeSkills(): void {
    const defaultSkills: Skill[] = [
      new Skill("Ум", "Интеллект и эрудиция", 5),
      new Skill("Харизма", "Юмор и обаяние", 5),
      new Skill("Значимость", "Важность и влияние", 5),
      new Skill("Популярность", "Активность и известность", 5),
      new Skill("Решительный", "Страсть и уверенность", 5),
    ];

    defaultSkills.forEach((skill) => {
      this._skills.set(skill.name.toLowerCase(), skill);
    });
  }

  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get skills(): Skill[] {
    return Array.from(this._skills.values());
  }

  public getSkill(skillName: string): Skill | undefined {
    return this._skills.get(skillName.toLowerCase());
  }
  public updateSkillValue(skillName: string, newValue: number): void {
    const skill = this.getSkill(skillName);
    if (skill) {
      skill.value = newValue;
    }
  }
  public changedSkillValue(skillName: string, delta: number): void {
    const skill = this.getSkill(skillName);
    if (skill) {
      skill.changeValue(delta);
    }
  }
}
