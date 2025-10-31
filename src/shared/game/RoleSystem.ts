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
                    min: { CHARISMA: 8, POPULARITY: 7 }
                },
                scoring: {
                    CHARISMA: { weight: 2.0 },
                    POPULARITY: { weight: 1.5 },
                    INTELLECT: { weight: 0.3 }
                },
                priority: 10
            },

            // The Void Blank
            {
                id: "focus_witch",
                name: "Ведьма-Фокусти",
                description: "FOCKUSTY теперь реально тянка!",
                category: "void",
                hardRequirements: {
                    min: { INTELLECT: 6, CHARISMA: 5 },
                    max: { DETERMINATION: 4 }
                },
                scoring: {
                    INTELLECT: { weight: 1.5 },
                    CHARISMA: { weight: 1.2 },
                    DETERMINATION: {
                        weight: -1.0, // Отрицательный вес - чем меньше, тем лучше
                        curve: (val) => val > 3 ? -val * 2 : 0
                    }
                },
                priority: 8
            },
            {
                id: "evil_focus",
                name: "Злой Фокус-Покус",
                description: "А я говорил его так не называть!",
                category: "void",
                hardRequirements: {
                    min: { DETERMINATION: 7 },
                    max: { CHARISMA: 4 }
                },
                scoring: {
                    DETERMINATION: { weight: 2.0 },
                    SIGNIFICANCE: { weight: 1.0 },
                    CHARISMA: { weight: -0.8 }
                },
                priority: 7
            },

            // FarySD Blank
            {
                id: "evil_valya",
                name: "Злой Валя",
                description: "Упс... Кое-то сильно разозлился...",
                category: "farysd",
                hardRequirements: {
                    min: { DETERMINATION: 8 },
                    max: { CHARISMA: 3, POPULARITY: 4 }
                },
                scoring: {
                    DETERMINATION: { weight: 2.5 },
                    SIGNIFICANCE: { weight: 1.2 },
                    CHARISMA: { weight: -1.0 }
                },
                priority: 9
            },
            {
                id: "psycho_rabbit",
                name: "Психозный психоз",
                description: "Приведение, которое всегда приходит не вовремя",
                category: "farysd",
                hardRequirements: {
                    min: { DETERMINATION: 6 },
                    max: { INTELLECT: 5 }
                },
                scoring: {
                    DETERMINATION: {
                        weight: 1.8,
                        curve: (val) => val > 7 ? val * 1.5 : val
                    },
                    POPULARITY: { weight: 0.8 }
                },
                priority: 6
            },
            {
                id: "fairy_logo",
                name: "Логотип Фейри",
                description: "Что? Он же прямо такой, как тыква...",
                category: "farysd",
                hardRequirements: {
                    min: { CHARISMA: 6, POPULARITY: 5 }
                },
                scoring: {
                    CHARISMA: { weight: 1.5 },
                    POPULARITY: { weight: 1.3 },
                    INTELLECT: { weight: 0.5 }
                },
                priority: 5
            },

            // Роль по умолчанию
            {
                id: "default_pumpkin",
                name: "Тыковка",
                description: "Милая и беззащитная тыковка",
                category: "farysd",
                hardRequirements: {}, // Нет требований - всегда доступна
                scoring: {
                    CHARISMA: { weight: 0.5 },
                    POPULARITY: { weight: 0.5 }
                },
                priority: 0
            }
        ];
    }

    public calculateRole(player: Player): GameRole {
        const eligibleRoles = this.roles.filter(role =>
            this.meetsHardRequirements(player, role.hardRequirements)
        );

        if (eligibleRoles.length === 0) {
            return this.getDefaultRole();
        }

        // Сортируем по баллам и приоритету
        const scoredRoles = eligibleRoles.map(role => ({
            role,
            score: this.calculateRoleScore(player, role)
        }));

        return scoredRoles.sort((a, b) => {
            if (b.score !== a.score) {
                return b.score - a.score;
            }
            return b.role.priority - a.role.priority;
        })[0].role;
    }

    private meetsHardRequirements(player: Player, requirements: RoleRequirement): boolean {
        // Проверяем минимальные значения
        if (requirements.min) {
            for (const [skillKey, minValue] of Object.entries(requirements.min)) {
                const skillName = SKILL_NAMES[skillKey as SkillKey];
                const skill = player.getSkill(skillName);
                if (!skill || skill.value < minValue!) {
                    return false;
                }
            }
        }

        // Проверяем максимальные значения
        if (requirements.max) {
            for (const [skillKey, maxValue] of Object.entries(requirements.max)) {
                const skillName = SKILL_NAMES[skillKey as SkillKey];
                const skill = player.getSkill(skillName);
                if (skill && skill.value > maxValue!) {
                    return false;
                }
            }
        }

        // Проверяем точные значения
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

            // Применяем кривую преобразования если есть
            if (config.curve) {
                skillValue = config.curve(skillValue);
            }

            totalScore += skillValue * config.weight;
        }

        return totalScore;
    }

    private getDefaultRole(): GameRole {
        return this.roles.find(role => role.id === "default_pumpkin")!;
    }

    public getRole(roleId: string): GameRole | undefined {
        return this.roles.find(role => role.id === roleId);
    }

    public getAllRoles(): GameRole[] {
        return [...this.roles];
    }

    public getRolesByCategory(category: GameRole['category']): GameRole[] {
        return this.roles.filter(role => role.category === category);
    }
}