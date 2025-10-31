import type { GameRole } from "../types";

import { Skill } from "./Skill";
import { RoleSystem } from "./RoleSystem";

import { SKILL_NAMES } from "../config/constants";

export class Player {
  private _currentRole: GameRole | null = null;

  protected _name: string = "Spooky Gamer";
  protected _skills: Map<string, Skill> = new Map();

  constructor(name?: string) {
    if (name) this._name = name;
    this.initializeSkills();
  }

  private initializeSkills(): void {
    const defaultSkills: Skill[] = [
      new Skill(SKILL_NAMES.INTELLECT, "Интеллект и эрудиция", 5),
      new Skill(SKILL_NAMES.CHARISMA, "Юмор и обаяние", 5),
      new Skill(SKILL_NAMES.SIGNIFICANCE, "Важность и влияние", 5),
      new Skill(SKILL_NAMES.POPULARITY, "Активность и известность", 5),
      new Skill(SKILL_NAMES.DETERMINATION, "Страсть и уверенность", 5),
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

  public updateSkills(skillChanges: Record<string, number>): void {
    Object.entries(skillChanges).forEach(([skillName, delta]) => {
      this.changedSkillValue(skillName, delta);
    });
  }

  public calculateRole(): GameRole {
    const roleSystem = RoleSystem.getInstance();
    this._currentRole = roleSystem.calculateRole(this);
    return this._currentRole;
  }

  public get currentRole(): GameRole | null {
    if (!this._currentRole) {
      this.calculateRole();
    }
    return this._currentRole;
  }

  public set currentRole(role: GameRole) {
    this._currentRole = role;
  }

  public recalculateRole(): void {
    this._currentRole = null;
    this.calculateRole();
  }
}
