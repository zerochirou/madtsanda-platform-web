import { Role, ROLE_LEVEL } from "@/types/access";

export function hasAccess(userRole: Role, requiredRole: Role) {
  return ROLE_LEVEL[userRole] >= ROLE_LEVEL[requiredRole];
}
