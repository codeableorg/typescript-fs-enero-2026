const db: User[] = [
  {
    id: 1,
    name: "carlos rodriguez",
    active: true,
    address: "calle prueba 123",
    avatar: "www.pinterest.com/test",
    email: "carlos@gmail.com",
    password: "2k3n12j3i12h3123",
    rol: "admin",
  },
  {
    id: 2,
    name: "carlos rodriguez",
    active: true,
    address: "calle prueba 123",
    avatar: "www.pinterest.com/test",
    email: "carlos@gmail.com",
    password: "2k3n12j3i12h3123",
    rol: "super-admin",
  },
];

const ROLES = {
  Admin: "admin",
  Developer: "developer",
  SuperAdmin: "super-admin",
  Employee: "employee",
} as const;

type Rol = (typeof ROLES)[keyof typeof ROLES];

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  rol: Rol;
  active: boolean;
  address: string;
  avatar: string;
}

// const rolPrueba: Rol = ;
export type UserPublic = Omit<User, "password" | "email">;

export type UserRecipiet = Pick<User, "id" | "name" | "address">;

export type UserUpdate = Partial<Omit<User, "id">>;

export type UserByRol = Record<Rol, User[]>;

// export function field<K extends keyof User>(user: User, clave: K): User[K] | string {
//   if (user[clave] === "id") return "Llave no accesible"

//   return user[clave];
// }

// const id = field(db[0], "");

// type Exact<T, Base> = Base & { [K in Exclude<keyof T, keyof Base>]: never };

//* Para esta funcion, el caso hipotetico es que se se consultó a un User en BD
//* Y se le envía a esta función
function getUserPublico(user: User): UserPublic {
  const { password: _password, ...publico } = user;
  // const result: Exact<typeof publico, UserPublic> = publico;
  return publico;
}

// * Esta funcion es un simulado de retornar data mínima del User
// * Por ejemplo para imprimir un recibo.
//* Para esta funcion, el caso hipotetico es que se se consultó a un User en BD
//* Y se le envía a esta función
function getUserInfoForRecipiet(User: User): UserRecipiet {
  const { id, name, address } = User;
  return {
    id,
    name,
    address,
  };
}

export function groupByRol(users: Array<User>): UserByRol {
  const groups: UserByRol = {
    [ROLES.Admin]: [],
    [ROLES.Developer]: [],
    [ROLES.SuperAdmin]: [],
    [ROLES.Employee]: [],
  };

  for (const user of users) {
    groups[user.rol].push(user);
  }

  return groups;
}

const groups = groupByRol(db);
console.log(groups);

interface UserError {
  error: string;
  status: number;
}

//updateUser(req.params.id, req.body)
//updateUser(userId, userToUpdate)
// updateUser(1, {});

//type guard

function isObject(data: unknown): data is Record<string, unknown> {
  return data !== null && data !== undefined && typeof data === "object";
}

//todo: Refactorizar
function isRol(value: unknown): value is Rol {
  return (
    value === "admin" ||
    value === "employee" ||
    value === "super-admin" ||
    value === "employee"
  );
}

const validations: Record<keyof UserUpdate, (value: unknown) => boolean> = {
  name: (value) => typeof value === "string",
  email: (value) => typeof value === "string",
  password: (value) => typeof value === "string",
  rol: isRol,
  active: (value) => typeof value === "boolean",
  address: (value) => typeof value === "string",
  avatar: (value) => typeof value === "string",
};

function invalidField(data: Record<string, unknown>): string | null {
  for (const [key, validator] of Object.entries(validations)) {
    if (!validator(data[key])) {
      return key;
    }
  }

  return null;
}

export function isUser(data: unknown): data is UserUpdate {
  return isObject(data) && invalidField(data) === null;
}

// * Esta funcion simularia el servicio que recibe desde un posible controlador
//* el Id del User que viaja en una posible url `/users/:id`
function updateUser(
  userId: number,
  userToUpdate: UserUpdate,
): User | UserError {
  if (isUser(userToUpdate)) {
    const userIndex = db.findIndex((user) => user.id === userId);
    if (userIndex === -1)
      return { error: "El User no fue encontrado", status: 404 };

    db[userIndex] = {
      ...db[userIndex],
      ...userToUpdate,
    };

    return db[userIndex];
  }

  return {
    error: "La informacion enviado no cumple con los valores adecuados",
    status: 422,
  };
}
