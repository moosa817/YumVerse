import toast from "react-hot-toast";
import { decrypt, encrypt, generateSecretKey } from "./utils";

const ENCR_DATA_KEY = import.meta.env.VITE_ENCR_DATA_KEY;
const ENCR_DATA_SECRET = import.meta.env.VITE_ENCR_DATA_SECRET;

export const get = () => {
  const storedUser = localStorage.getItem(ENCR_DATA_KEY);
  const storedKey = localStorage.getItem(ENCR_DATA_SECRET);
  if (storedUser && storedKey) {
    const decryptedData = decrypt(storedUser, storedKey);
    return decryptedData;
  }
  return null;
};

export const set = (data) => {
  const secretKey = generateSecretKey();
  const encryptedData = encrypt(data, secretKey);
  localStorage.setItem(ENCR_DATA_KEY, encryptedData);
  localStorage.setItem(ENCR_DATA_SECRET, secretKey);
};

export const clear = () => {
  localStorage.removeItem(ENCR_DATA_KEY);
  localStorage.removeItem(ENCR_DATA_SECRET);
};

export async function logout() {
  clear();
  toast.success("Logout Successfully");
  window.location.href = "/";
}
