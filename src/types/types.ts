export type Person = {
  id: number;
  firstName: string;
  lastName: string;
  passports_number: number;
  contacts_tel: number;
};
export type Persons = Person[];

export type Passport = {
  id: number;
  series: number;
  number: number;
};
export type Passports = Passport[];

export type DriverLicense = {
  id: number;
  model: string;
};
export type DriverLicenses = DriverLicense[];

export type Contatc = {
  id: number;
  tel: number;
  email: string;
  tg: string;
  addresses_city: string;
};
export type Contatcs = Contatc[];

export type Address = {
  id: number;
  city: string;
  street: string;
  home: number;
};
export type Addresses = Address[];

export type Car = {
  id: number;
  mark: string;
  model: string;
  price: number;
};
export type Cars = Car[];

export type Workplace = {
  id: number;
  organization: string;
  post: string;
  bankCards_cardNumber: number;
};
export type Workplaces = Workplace[];

export type BankCard = {
  id: number;
  cardNumber: number;
  bank: string;
};
export type BankCards = BankCard[];

export type Family = {
  id: number;
  father: string;
  mother: string;
  son: string;
  daughter: string;
  policies_number: number;
};
export type Families = Family[];

export type Policy = {
  id: number;
  number: number;
  insuranceСompany: string;
};
export type Policies = Policy[];

// ------------------------------------
export type Row =
  | Person
  | Passport
  | DriverLicense
  | Contatc
  | Address
  | Car
  | Workplace
  | BankCard
  | Family
  | Policy;

export type Tables =
  | Persons
  | Passports
  | DriverLicenses
  | Contatcs
  | Addresses
  | Cars
  | Workplaces
  | BankCards
  | Families
  | Policies
  | null;

// ------------------------------------
// данные одного элемента таблицы для его редактирования
export type TableIitem = {
  id: number; // id строки в которой находится элемент
  key: string; // ключ элемента
  value: string | number; // значение элемента
};

// ------------------------------------
export enum FetchStatus {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
