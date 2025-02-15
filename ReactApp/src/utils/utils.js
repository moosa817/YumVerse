import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import CryptoJS, { AES } from "crypto-js";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const nameToCode = (name) => {
  let nameCode = "";
  let nameIntoArr = name.split(" ");
  nameIntoArr.map((ele) => (nameCode += ele[0]));
  nameCode.toUpperCase();
  return nameCode;
};

export const getStatusSeverity = ({ active }) => {
  switch (active) {
    case 1:
      return {
        value: "Active",
        status: "success",
      };
    case 0:
      return {
        value: "In Active",
        status: "danger",
      };
    default:
      return null;
  }
};

export const generateSecretKey = () => {
  const keyLength = 32;
  const buffer = new Uint8Array(keyLength);
  crypto.getRandomValues(buffer);
  return Array.from(buffer, (byte) => byte.toString(16).padStart(2, "0")).join(
    ""
  );
};

export const encrypt = (data, secretKey) => {
  const encryptedData = AES.encrypt(JSON.stringify(data), secretKey).toString();
  return encryptedData;
};

export const decrypt = (encryptedData, secretKey) => {
  const decryptedData = AES.decrypt(encryptedData, secretKey).toString(
    CryptoJS.enc.Utf8
  );
  return JSON.parse(decryptedData);
};
