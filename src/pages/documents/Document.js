import { useState } from "react";
import FileUploader from "../../components/fileUploader/FileUploader";
import SocieteSkeletonForm from "../societes/SocieteSkeletonForm";
import "./document.scss";
import DocumentDataDisplay from "./DocumentDataDisplay";
// import FileUploader from "../../components/FileUploader/FileUploader";

const Document = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [img, setImg] = useState(null);
    // const url = img !== null ? URL.createObjectURL(img) : null;
    // console.log(url);
    return (
        <div className="document-page-wrapper">
            <div className="document-section">
                <FileUploader
                    setData={setData}
                    setIsLoading={setIsLoading}
                    setImg={setImg}
                />
            </div>
            {data !== null && data !== undefined ? (
                <div className="regular-section">
                    {img && (
                        <div className="document-img">
                            <img
                                src={
                                    img.url ? img.url : URL.createObjectURL(img)
                                }
                                alt=""
                            />
                        </div>
                    )}
                    <DocumentDataDisplay data={data} />
                </div>
            ) : isLoading ? (
                // <div className="loading-wrapper">
                //     <Loader />
                // </div>
                <div className="regural-section">
                    <div className="document-img-skeleton"></div>
                    <SocieteSkeletonForm />
                </div>
            ) : null}
        </div>
    );
};

export default Document;
