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

export type Tables = Cars | Dishes | Contatcs | Users | Passports | null;

// ------------------------------------
// данные одного элемента таблицы
export type TableIitem = {
  id: number; // id строки в которой находится элемент
  key: string; // ключ элемента
  value: string | number; // значение элемента
};
