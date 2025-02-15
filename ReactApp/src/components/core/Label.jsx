import React from "react";

const Label = ({ name, required }) => {
    let asteriskClass = "";
    if (required) {
        asteriskClass = "after:content-['*'] after:ml-0.5 after:text-red-500";
    }

    return (
        <label htmlFor={name} className={asteriskClass}>
            {name}
        </label>
    );
};

export default Label;
