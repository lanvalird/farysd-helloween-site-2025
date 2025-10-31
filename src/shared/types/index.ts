import { SKILL_NAMES } from "../config/constants";

type SkillName = (typeof SKILL_NAMES)[keyof typeof SKILL_NAMES];

export type SkillEffect = Record<SkillName, number>;

export * from './roles';