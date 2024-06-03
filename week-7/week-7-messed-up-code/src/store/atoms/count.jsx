//context api than best is recoil to use instad context api
import { atom } from "recoil";

export const countAtom = atom({
  key: "countAtom",
  default: 0,
});
