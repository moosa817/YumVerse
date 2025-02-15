import React from "react";
import { Password } from "primereact/password";
import { Divider } from "primereact/divider";
import Label from "./Label";
import { utils } from "../../utils";

const PasswordInput = ({
  label = "",
  required = true,
  feedback = false,
  className = "",
  ...props
}) => {
  const footer = (
    <React.Fragment>
      <Divider />
      <p className="mt-2">Suggestions</p>
      <ul className="pl-2 ml-2 mt-0 line-height-3">
        <li>At least one lowercase</li>
        <li>At least one uppercase</li>
        <li>At least one numeric</li>
        <li>Minimum 8 characters</li>
      </ul>
    </React.Fragment>
  );

  return (
    <div className="fieldWrapperStyles">
      <Label name={label} required={required} />
      <Password
        placeholder="•••••••••••"
        required={required}
        minLength={8}
        footer={footer}
        feedback={feedback}
        toggleMask
        className={utils.cn(
          "[&>div>input]:dark:bg-grey [&>div>input]:shadow-none [&>div>input]:dark:text-white",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default PasswordInput;
