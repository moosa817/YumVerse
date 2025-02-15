import { error, success } from "./API";
import { clear, get, logout, set } from "./user";
import { cn, decrypt, encrypt, getStatusSeverity, nameToCode } from "./utils";

export const API = {
  error,
  success,
};

export const utils = {
  encrypt,
  decrypt,
  cn,
  nameToCode,
  getStatusSeverity,
};

export const user = {
  get,
  set,
  clear,
  logout,
};
