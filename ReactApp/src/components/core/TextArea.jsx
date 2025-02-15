import React from "react";
import { Label } from ".";
import { InputTextarea } from "primereact/inputtextarea";

const TextArea = ({ label = "", required = true, ...props }) => {
    return (
        <div className="fieldWrapperStyles">
            <Label name={label} required={required} />
            <InputTextarea
                autoResize
                rows={5}
                cols={30}
                required={required}
                {...props}
            />
        </div>
    );
};

export default TextArea;
