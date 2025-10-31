import { SKILL_NAMES } from "../config/constants";

export type SkillKey = keyof typeof SKILL_NAMES;
export type SkillName = (typeof SKILL_NAMES)[SkillKey];

export interface RoleRequirement {
  min?: Partial<Record<SkillKey, number>>;
  max?: Partial<Record<SkillKey, number>>;
  exact?: Partial<Record<SkillKey, number>>;
}

export interface RoleScoreConfig {
  [skillKey: string]: {
    weight: number;
    curve?: (value: number) => number;
  };
}

export interface GameRole {
  id: string;
  name: string;
  description: string;
  category: "everythings" | "void" | "farysd";
  hardRequirements: RoleRequirement;
  scoring?: RoleScoreConfig;
  scoreWeight?: number;
  priority: number;
}
