type Permission = "create" | "read" | "update" | "delete";

enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

function getPermissions(role: Role): Permission[] {
  switch (role) {
    case Role.Admin:
      return ["create", "read", "update", "delete"];
    case Role.User:
      return ["read", "update"];
    case Role.Guest:
      return ["read"];
    default:
      return [];
  }
}

console.log(getPermissions(Role.Guest));
console.log(getPermissions(Role.User));
console.log(getPermissions(Role.Admin));
