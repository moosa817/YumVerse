import React, { useRef, useState } from "react";
import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";
import { ProgressBar } from "primereact/progressbar";
import { Tag } from "primereact/tag";
import { Tooltip } from "primereact/tooltip";
import { TbPhotoSquareRounded } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";

const Uploader = ({
    state,
    setState,
    maxFileSize = 1000000,
    minFileSize = 10000,
    accept = "image/*",
    multiple = false,
    placeholder = "Drag and Drop Image Here",
    ...props
}) => {
    const fileUploadRef = useRef(null);
    const [totalSize, setTotalSize] = useState(0);

    const onTemplateSelect = (e) => {
        let _totalSize = totalSize;
        let files = e.files;
        setState(multiple ? e.files : e.files[0]);

        Object.keys(files).forEach((key) => {
            _totalSize += files[key].size || 0;
        });

        setTotalSize(_totalSize);
    };

    const onTemplateRemove = (file, callback) => {
        if (!multiple) {
            setState({});
        }
        // state.map((ele, ind) => {
        //     if (ele.name === file.name) {
        //         setState();
        //     }
        // });
        setTotalSize(totalSize - file.size);
        callback();
    };

    const onTemplateClear = () => {
        setTotalSize(0);
        multiple ? setState([]) : setState({});
    };

    const headerTemplate = (options) => {
        const { className, chooseButton, cancelButton } = options;
        const value = totalSize / minFileSize;
        const formatedValue =
            fileUploadRef && fileUploadRef.current
                ? fileUploadRef.current.formatSize(totalSize)
                : "0 B";

        return (
            <div
                className={className}
                style={{
                    backgroundColor: "transparent",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {chooseButton}
                {cancelButton}
                <div className="flex items-center gap-3 ml-auto">
                    <span>
                        {formatedValue} / {maxFileSize / 1000000} MB
                    </span>
                    <ProgressBar
                        value={value}
                        showValue={false}
                        style={{ width: "10rem", height: "12px" }}
                    ></ProgressBar>
                </div>
            </div>
        );
    };

    const itemTemplate = (file, props) => {
        return (
            <div className="flex items-center flex-wrap">
                <div className="flex items-center" style={{ width: "40%" }}>
                    <img
                        alt={file.name}
                        role="presentation"
                        src={file.objectURL}
                        width={100}
                    />
                    <span className="flex flex-column text-left ml-3">
                        {file.name}
                        <small>{new Date().toLocaleDateString()}</small>
                    </span>
                </div>
                <Tag
                    value={props.formatSize}
                    severity="warning"
                    className="px-3 py-2"
                />
                <Button
                    type="button"
                    icon={<RxCross2 className="text-xl" />}
                    className="p-button-outlined p-button-rounded p-button-danger ml-auto"
                    onClick={() => onTemplateRemove(file, props.onRemove)}
                />
            </div>
        );
    };

    const emptyTemplate = () => {
        return (
            <div className="flex items-center flex-column">
                <i
                    className="pi pi-image mt-3 p-5"
                    style={{
                        fontSize: "5em",
                        borderRadius: "50%",
                        backgroundColor: "var(--surface-b)",
                        color: "var(--surface-d)",
                    }}
                ></i>
                <span
                    style={{
                        fontSize: "1.2em",
                        color: "var(--text-color-secondary)",
                    }}
                    className="my-5"
                >
                    {placeholder}
                </span>
            </div>
        );
    };

    const chooseOptions = {
        icon: <TbPhotoSquareRounded className="text-xl" />,
        iconOnly: true,
        className: "custom-choose-btn p-button-rounded p-button-outlined",
    };
    const cancelOptions = {
        icon: <RxCross2 className="text-xl" />,
        iconOnly: true,
        className:
            "custom-cancel-btn p-button-danger p-button-rounded p-button-outlined",
    };

    return (
        <div className="mt-8">
            <Tooltip
                target=".custom-choose-btn"
                content="Choose"
                position="bottom"
            />
            <Tooltip
                target=".custom-cancel-btn"
                content="Clear"
                position="bottom"
            />

            <FileUpload
                ref={fileUploadRef}
                name="demo[]"
                multiple={multiple}
                maxFileSize={maxFileSize}
                onSelect={onTemplateSelect}
                onError={onTemplateClear}
                onClear={onTemplateClear}
                headerTemplate={headerTemplate}
                itemTemplate={itemTemplate}
                emptyTemplate={emptyTemplate}
                chooseOptions={chooseOptions}
                cancelOptions={cancelOptions}
                {...props}
            />
        </div>
    );
};

export default Uploader;
