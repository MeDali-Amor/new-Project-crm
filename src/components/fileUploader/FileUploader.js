import React, { useRef, useState } from "react";

import "./fileUploader.scss";
import uploadImg from "../../assets/cloud-upload-regular-240.png";
import axios from "axios";

const FileUploader = ({ setData }) => {
    // const [data, setData] = useState({});
    const [fileList, setFileList] = useState(null);
    const [error, setError] = useState("");
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const dragAndDropRef = useRef(null);

    const onDragEnter = () => {
        dragAndDropRef.current.classList.add("dragover");
    };
    const onDragLeave = () => {
        dragAndDropRef.current.classList.remove("dragover");
    };
    const onDrop = () => {
        dragAndDropRef.current.classList.remove("dragover");
    };
    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        // if (!newFile) return setError("Image n'existe pas");
        if (newFile.type !== "image/jpeg" && newFile.type !== "image/png") {
            setError("La format d'image n'est pas valide!");
            setFileList(null);
        }
        // const updatedFileList = [...fileList, newFile];
        else {
            setFileList(newFile);
            setError("");
        }
    };
    const removeFile = () => {
        // const updatedFileList = [...fileList];
        // updatedFileList.splice(fileList.indexOf(file), 1);
        setFileList(null);
        const input = document.getElementById("file-input");
        console.log(input.value);
        input.value = "";
    };

    const handleUpload = async () => {
        if (fileList) {
            const formData = new FormData();
            formData.append("files", fileList);
            try {
                const res = await axios.post(
                    "https://4344-197-1-25-23.eu.ngrok.io/api/detect",
                    formData
                );
                await setFileList(null);
                setData(res.data);
                console.log(res.data);
            } catch (error) {
                console.log(error);
            }
        }
    };
    return (
        <div className="upload-box">
            <div className="upload-container">
                <div
                    ref={dragAndDropRef}
                    onDragEnter={onDragEnter}
                    onDragLeave={onDragLeave}
                    onDrop={onDrop}
                    className="drag-and-drop-box"
                >
                    <div className="drag-and-drop-logo">
                        <img src={uploadImg} alt="" />
                        <p className="dark-blue">
                            Drag &#38; Drop your images here, or{" "}
                            <span className="light-blue">browse</span>
                        </p>
                        <p className="small-text">Supports JPG, PNG</p>
                    </div>
                    <input
                        type="file"
                        name="files"
                        accept="image/*"
                        onChange={onFileDrop}
                        id="file-input"
                        // value={fileList}
                    />
                </div>
                <div className="url-upload-wrapper">
                    <div className="url-uplaod">
                        <label>URL:</label>
                        <input type="text" />
                    </div>
                    <div className="upload-btn">
                        <button onClick={handleUpload}>upload</button>
                    </div>
                </div>
            </div>
            {fileList ? (
                <div className="files-preview">
                    {/* <p className="files-preview__title">Ready to Upload</p> */}
                    {/* {fileList.map((item, index) => ( */}
                    <div
                        key={fileList.lastModified}
                        className="files-preview__item"
                    >
                        <img
                            src={
                                fileList.url
                                    ? fileList.url
                                    : URL.createObjectURL(fileList)
                            }
                            alt=""
                            className="file-thumbnail"
                        />
                        <div className="files-preview__item__info">
                            <p className="file-name">{fileList.name}</p>
                            <p className="file-size">{fileList.size} B</p>
                            {/* <ProgressBar percentage={uploadPercentage} /> */}
                        </div>
                        <span
                            className="files-preview__item__delete"
                            onClick={removeFile}
                        >
                            x
                        </span>
                    </div>
                    {/* ))} */}
                </div>
            ) : null}
            {error && <div className="error">{error}</div>}
        </div>
    );
};

export default FileUploader;
