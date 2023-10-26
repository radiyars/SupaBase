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

export type Tables<T> = T extends "cars"
  ? Cars
  : T extends "dishes"
  ? Dishes
  : T extends "contacts"
  ? Contatcs
  : null;

export type TablesT = "cars" | "dishes" | "contacts" | null;

export type TablesList = typeof tabelList;
