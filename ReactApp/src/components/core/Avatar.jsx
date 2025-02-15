import React from "react";
import { Avatar as PRAvatar } from "primereact/avatar";

const Avatar = ({ label }) => {
    return (
        <PRAvatar
            label={label}
            size="large"
            className="bg-lightpurple text-white w-10 h-10"
            shape="circle"
        />
    );
};

export default Avatar;
