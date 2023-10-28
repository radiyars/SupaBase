import { tabelList } from "../App";

export type Car = {
  id: number;
  mark: string;
  model: string;
  price: number;
};
export type Cars = Car[];

export type Dish = {
  id: number;
  soup: string;
  garnish: string;
};
export type Dishes = Dish[];

export type Contatc = {
  id: number;
  soup: string;
  garnish: string;
};
export type Contatcs = Contatc[];

export type User = {
  id: number;
  lastName: string;
  firstName: string;
  passport_id: number;
  relationTable: "passport";
  relationColumn: "id";
};
export type Users = User[];

export type Passport = {
  id: number;
  series: number;
  number: number;
};
export type Passports = Passport[];

// ------------------------------------
export type Row = Car | Dish | Contatc | User | Passport;

export type Tables2 = Cars | Dishes | Contatcs | Users | Passports | null;

// !tanble type
// export type Tables<T> = T extends "cars"
//   ? Cars
//   : T extends "dishes"
//   ? Dishes
//   : T extends "contacts"
//   ? Contatcs
//   : T extends "user"
//   ? Users
//   : T extends "passport"
//   ? Passports
//   : null;

// export type TablesT =
//   | "cars"
//   | "dishes"
//   | "contacts"
//   | "user"
//   | "passport"
//   | null;

// let a: Tables<TablesList[2]>;
// export type Table = Tables<TablesT>;
// !!
export type TablesList = typeof tabelList;

// данные одного элемента таблицы
export type TableIitem = {
  id: number; // id строки в которой находится элемент
  key: string; // ключ элемента
  value: string | number; // значение элемента
};
