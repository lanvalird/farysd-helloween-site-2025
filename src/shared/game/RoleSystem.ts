import type { GameRole, RoleRequirement, SkillKey } from "../types";

import { SKILL_NAMES } from "../config/constants";
import { Player } from "./Player";

export class RoleSystem {
  private static instance: RoleSystem;
  private roles: GameRole[] = [];

  private constructor() {
    this.initializeRoles();
  }

  public static getInstance(): RoleSystem {
    if (!RoleSystem.instance) {
      RoleSystem.instance = new RoleSystem();
    }
    return RoleSystem.instance;
  }

  private initializeRoles(): void {
    this.roles = [
      // Everythings Blank
      {
        id: "love",
        name: "Любовь",
        description: "Живёт в сердцах",
        category: "everythings",
        hardRequirements: {
          min: { CHARISMA: 8, POPULARITY: 7 },
        },
        scoring: {
          CHARISMA: { weight: 2.0 },
          POPULARITY: { weight: 1.5 },
          INTELLECT: { weight: 0.3 },
        },
        priority: 10,
      },

      // The Void Blank
      {
        id: "focus_witch",
        name: "Ведьма-Фокусти",
        description: "FOCKUSTY теперь реально тянка!",
        category: "void",
        hardRequirements: {
          min: { INTELLECT: 6, CHARISMA: 5 },
          max: { DETERMINATION: 4 },
        },
        scoring: {
          INTELLECT: { weight: 1.5 },
          CHARISMA: { weight: 1.2 },
          DETERMINATION: {
            weight: -1.0,
            curve: (val) => (val > 3 ? -val * 2 : 0),
          },
        },
        priority: 8,
      },
      {
        id: "evil_focus",
        name: "Злой Фокус-Покус",
        description: "А я говорил его так не называть!",
        category: "void",
        hardRequirements: {
          min: { DETERMINATION: 7 },
          max: { CHARISMA: 4 },
        },
        scoring: {
          DETERMINATION: { weight: 2.0 },
          SIGNIFICANCE: { weight: 1.0 },
          CHARISMA: { weight: -0.8 },
        },
        priority: 7,
      },

      // Новые роли The Void Blank
      {
        id: "space",
        name: "Пространство",
        description: "А тут обширно... даже слишком.",
        category: "void",
        hardRequirements: {
          min: { SIGNIFICANCE: 7, INTELLECT: 6 },
        },
        scoring: {
          SIGNIFICANCE: { weight: 2.0 },
          INTELLECT: { weight: 1.5 },
          POPULARITY: { weight: -0.5 },
        },
        priority: 6,
      },
      {
        id: "fockusty",
        name: "FOCKUSTY",
        description: "Фокусти, где книга про FOCKUSTY?",
        category: "void",
        hardRequirements: {
          min: { CHARISMA: 7, INTELLECT: 5 },
        },
        scoring: {
          CHARISMA: { weight: 1.8 },
          INTELLECT: { weight: 1.2 },
          DETERMINATION: { weight: 0.5 },
        },
        priority: 7,
      },
      {
        id: "ze_void",
        name: "Зе Войдя 💖",
        description: "Кристи влюблена в тебя!",
        category: "void",
        hardRequirements: {
          min: { CHARISMA: 8, POPULARITY: 6 },
        },
        scoring: {
          CHARISMA: { weight: 2.2 },
          POPULARITY: { weight: 1.5 },
          INTELLECT: { weight: -0.3 },
        },
        priority: 8,
      },
      {
        id: "kristy",
        name: "Кристи",
        description: "15-летняя девочка подросток (это двойная отсылка?!)",
        category: "void",
        hardRequirements: {
          min: { CHARISMA: 6, POPULARITY: 7 },
          max: { INTELLECT: 5 },
        },
        scoring: {
          POPULARITY: { weight: 1.8 },
          CHARISMA: { weight: 1.5 },
          INTELLECT: { weight: -1.0 },
        },
        priority: 6,
      },

      // FarySD Blank
      {
        id: "evil_valya",
        name: "Злой Валя",
        description: "Упс... Кое-то сильно разозлился...",
        category: "farysd",
        hardRequirements: {
          min: { DETERMINATION: 8 },
          max: { CHARISMA: 3, POPULARITY: 4 },
        },
        scoring: {
          DETERMINATION: { weight: 2.5 },
          SIGNIFICANCE: { weight: 1.2 },
          CHARISMA: { weight: -1.0 },
        },
        priority: 9,
      },
      {
        id: "psycho_rabbit",
        name: "Психозный психоз",
        description: "Приведение, которое всегда приходит не вовремя",
        category: "farysd",
        hardRequirements: {
          min: { DETERMINATION: 6 },
          max: { INTELLECT: 5 },
        },
        scoring: {
          DETERMINATION: {
            weight: 1.8,
            curve: (val) => (val > 7 ? val * 1.5 : val),
          },
          POPULARITY: { weight: 0.8 },
        },
        priority: 6,
      },
      {
        id: "fairy_logo",
        name: "Логотип Фейри",
        description: "Что? Он же прямо такой, как тыква...",
        category: "farysd",
        hardRequirements: {
          min: { CHARISMA: 6, POPULARITY: 5 },
        },
        scoring: {
          CHARISMA: { weight: 1.5 },
          POPULARITY: { weight: 1.3 },
          INTELLECT: { weight: 0.5 },
        },
        priority: 5,
      },

      // Новые роли FarySD Blank
      {
        id: "real_love",
        name: "Реальная Любовь",
        description: "Помните? Она спасла наш сервер!",
        category: "farysd",
        hardRequirements: {
          min: { CHARISMA: 8, DETERMINATION: 7 },
        },
        scoring: {
          CHARISMA: { weight: 2.0 },
          DETERMINATION: { weight: 1.8 },
          POPULARITY: { weight: 1.2 },
        },
        priority: 9,
      },
      {
        id: "max_maxim",
        name: "Максимум Максимиум",
        description: "Это спидран по майнкрафту, поехали!",
        category: "farysd",
        hardRequirements: {
          min: { DETERMINATION: 9, INTELLECT: 6 },
        },
        scoring: {
          DETERMINATION: { weight: 2.2 },
          INTELLECT: { weight: 1.3 },
          SIGNIFICANCE: { weight: 0.8 },
        },
        priority: 8,
      },
      {
        id: "java_player",
        name: "Java-игрок",
        description: "Вы просто любите комфорт, а костыли — это фичи?",
        category: "farysd",
        hardRequirements: {
          min: { INTELLECT: 7 },
          max: { CHARISMA: 4 },
        },
        scoring: {
          INTELLECT: { weight: 1.7 },
          SIGNIFICANCE: { weight: 1.0 },
          CHARISMA: { weight: -0.7 },
        },
        priority: 6,
      },
      {
        id: "bedrock_player",
        name: "Bedrock-игрок",
        description: "Я тоже играю в туалете 🚽",
        category: "farysd",
        hardRequirements: {
          min: { POPULARITY: 7 },
          max: { INTELLECT: 4 },
        },
        scoring: {
          POPULARITY: { weight: 1.9 },
          CHARISMA: { weight: 1.1 },
          INTELLECT: { weight: -0.8 },
        },
        priority: 5,
      },
      {
        id: "saya",
        name: "Сая",
        description: "Искусственный интеллект с высокой эмпатией",
        category: "farysd",
        hardRequirements: {
          min: { INTELLECT: 8, CHARISMA: 7 },
        },
        scoring: {
          INTELLECT: { weight: 1.8 },
          CHARISMA: { weight: 1.6 },
          DETERMINATION: { weight: 0.7 },
        },
        priority: 8,
      },

      // Роль по умолчанию
      {
        id: "default_pumpkin",
        name: "Тыковка",
        description: "Милая и беззащитная тыковка",
        category: "farysd",
        hardRequirements: {},
        scoring: {
          CHARISMA: { weight: 0.5 },
          POPULARITY: { weight: 0.5 },
        },
        priority: 0,
      },
    ];
  }

  public calculateRole(player: Player): GameRole {
    const eligibleRoles = this.roles.filter((role) =>
      this.meetsHardRequirements(player, role.hardRequirements),
    );

    if (eligibleRoles.length === 0) {
      return this.getDefaultRole();
    }

    const scoredRoles = eligibleRoles.map((role) => ({
      role,
      score: this.calculateRoleScore(player, role),
    }));

    return scoredRoles.sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return b.role.priority - a.role.priority;
    })[0].role;
  }

  private meetsHardRequirements(
    player: Player,
    requirements: RoleRequirement,
  ): boolean {
    if (requirements.min) {
      for (const [skillKey, minValue] of Object.entries(requirements.min)) {
        const skillName = SKILL_NAMES[skillKey as SkillKey];
        const skill = player.getSkill(skillName);
        if (!skill || skill.value < minValue!) {
          return false;
        }
      }
    }

    if (requirements.max) {
      for (const [skillKey, maxValue] of Object.entries(requirements.max)) {
        const skillName = SKILL_NAMES[skillKey as SkillKey];
        const skill = player.getSkill(skillName);
        if (skill && skill.value > maxValue!) {
          return false;
        }
      }
    }

    if (requirements.exact) {
      for (const [skillKey, exactValue] of Object.entries(requirements.exact)) {
        const skillName = SKILL_NAMES[skillKey as SkillKey];
        const skill = player.getSkill(skillName);
        if (!skill || skill.value !== exactValue!) {
          return false;
        }
      }
    }

    return true;
  }

  private calculateRoleScore(player: Player, role: GameRole): number {
    if (!role.scoring) {
      return 0;
    }

    let totalScore = 0;

    for (const [skillKey, config] of Object.entries(role.scoring)) {
      const skillName = SKILL_NAMES[skillKey as SkillKey];
      const skill = player.getSkill(skillName);

      if (!skill) continue;

      let skillValue = skill.value;

      if (config.curve) {
        skillValue = config.curve(skillValue);
      }

      totalScore += skillValue * config.weight;
    }

    return totalScore;
  }

  private getDefaultRole(): GameRole {
    return this.roles.find((role) => role.id === "default_pumpkin")!;
  }

  public getRole(roleId: string): GameRole | undefined {
    return this.roles.find((role) => role.id === roleId);
  }

  public getAllRoles(): GameRole[] {
    return [...this.roles];
  }

  public getRolesByCategory(category: GameRole["category"]): GameRole[] {
    return this.roles.filter((role) => role.category === category);
  }
}
