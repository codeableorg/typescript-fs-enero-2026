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
export type UserPublico = Omit<User, "password">;

export type UserRecipiet = Pick<User, "id" | "name" | "address">;

export type UserUpdate = Partial<Omit<User, "id">>;

// todo: Tipado mas estricto?
//* Para esta funcion, el caso hipotetico es que se se consultó a un User en BD
//* Y se le envía a esta función
function getUserPublico(User: User): UserPublico {
  const { password: _password, ...publico } = User;
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
];

interface UserNotFound {
  error: string;
  status: number;
}

// * Esta funcion simularia el servicio que recibe desde un posible controlador
//* el Id del User que viaja en una posible url `/users/:id`
function updateUser(
  userId: number,
  userToUpdate: UserUpdate,
): User | UserNotFound {
  const userIndex = db.findIndex((user) => user.id === userId);
  if (userIndex === -1)
    return { error: "El User no fue encontrado", status: 404 };

  db[userIndex] = {
    ...db[userIndex],
    ...userToUpdate,
  };

  return db[userIndex];
}

//updateUser(req.params.id, req.body)
//updateUser(userId, userToUpdate)
updateUser(1, {});
