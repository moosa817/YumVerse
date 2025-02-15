import toast from "react-hot-toast";
import { user } from ".";

export const error = (error, message) => {
  console.log("HandleError", error);
  const obj = error?.response?.data;
  const keys = Object.keys(obj);
  const firstValue = obj[keys[0]];

  if (firstValue) {
    if (Array.isArray(firstValue)) {
      toast.error(firstValue[0]);
    } else {
      toast.error(firstValue);
    }
    firstValue;
  } else if (message) {
    toast.error(message);

    // if (message === "Unauthorized Access") {
    //   user.clear();
    //   window.location.reload();
    // }
  } else {
    toast.error("Internal Server Error");
  }
};

export const success = (response, message) => {
  console.log("HandleSuccess", response);

  if (response.status == 200 || response.status == 201) {
    message && toast.success(message);
  }

  return response.data;
};
