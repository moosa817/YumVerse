import React from "react";
import { Dropdown as PRDropdown } from "primereact/dropdown";
import Label from "./Label";

const Dropdown = ({
    label = "",
    required = true,
    optionLabel = "name",
    ...props
}) => {
    return (
        <div className="fieldWrapperStyles">
            <Label name={label} required={required} />
            <PRDropdown
                required={required}
                optionLabel={optionLabel}
                className="w-full md:w-14rem"
                {...props}
            />
        </div>
    );
};

export default Dropdown;
