import { useState } from "react";
import FileUploader from "../../components/fileUploader/FileUploader";
import "./document.scss";
// import FileUploader from "../../components/FileUploader/FileUploader";

const Document = () => {
    const [data, setData] = useState(null);
    return (
        <div className="document-page-wrapper">
            <div className="section">
                <FileUploader setData={setData} />
            </div>
        </div>
    );
};

export default Document;
