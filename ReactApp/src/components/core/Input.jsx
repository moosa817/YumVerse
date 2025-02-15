import React from "react";
import { InputText } from "primereact/inputtext";
import Label from "./Label";
import { utils } from "../../utils";

const Input = ({
  type = "text",
  label = "",
  required = true,
  className = "",
  ...props
}) => {
  return (
    <div className="fieldWrapperStyles">
      <Label name={label} required={required} />
      <InputText
        type={type}
        required={required}
        className={utils.cn(
          "py-2 dark:bg-grey shadow-none dark:text-white",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default Input;
