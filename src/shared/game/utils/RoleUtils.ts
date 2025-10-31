import type { GameRole } from "../../types";

import { RoleSystem } from "../RoleSystem";

export class RoleUtils {
  public static getRoleForPlayer(player: any): GameRole {
    const roleSystem = RoleSystem.getInstance();
    return roleSystem.calculateRole(player);
  }

  public static getRoleDescription(role: GameRole): string {
    return `${role.name} - ${role.description}`;
  }

  public static getRoleRequirements(role: GameRole): string {
    const requirements: string[] = [];

    if (role.hardRequirements.min) {
      Object.entries(role.hardRequirements.min).forEach(([key, value]) => {
        requirements.push(`Минимум ${value} в ${key.toLowerCase()}`);
      });
    }

    if (role.hardRequirements.max) {
      Object.entries(role.hardRequirements.max).forEach(([key, value]) => {
        requirements.push(`Максимум ${value} в ${key.toLowerCase()}`);
      });
    }

    return requirements.length > 0 ? requirements.join(", ") : "Нет требований";
  }

  public static getMatchingRoles(player: any, limit: number = 3): GameRole[] {
    const roleSystem = RoleSystem.getInstance();
    const allRoles = roleSystem.getAllRoles();

    const scoredRoles = allRoles
      .map((role) => ({
        role,
        score: roleSystem["calculateRoleScore"](player, role),
        meetsRequirements: roleSystem["meetsHardRequirements"](
          player,
          role.hardRequirements,
        ),
      }))
      .filter((item) => item.meetsRequirements)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);

    return scoredRoles.map((item) => item.role);
  }
}
