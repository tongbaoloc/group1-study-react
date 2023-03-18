import { atom, selector } from "recoil";

export interface Wine {
  strCategory: string;
  strDrink: string;
  strDrinkThumb: string;
}

export interface User {
  username: string;
  password: string;
}
export const wineState = atom({
  key: "wineState",
  default: {} as Wine,
});
export const isAuthState = atom({
  key: "isAuthState",
  default: false,
});
export const userState = atom({
  key: "userState",
  default: {} as User,
});

