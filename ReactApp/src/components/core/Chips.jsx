import React from "react";
import { Chip } from "@mui/material";

const Chips = ({
    color = "primary",
    className = "!cursor-pointer text-base",
    ...props
}) => {
    return <Chip color={color} className={className} {...props} />;
};

export default Chips;
