import React from "react";
import "../societes/SocieteForm.scss";

const DocumentDataDisplay = ({ data = {} }) => {
    return (
        <div className="societe-form-container">
            <form
            // onSubmit={handleSaveData}
            >
                <div className="section">
                    <div className="section-title">Document</div>
                    <div className="row">
                        <div className="info-feild col-2">
                            <label htmlFor="">Type de document </label>
                            <input
                                // onChange={(e) => handleFieldChange(e)}
                                name="name"
                                type="text"
                                defaultValue={data?.predictions?.label || ""}
                                value={data?.predictions?.label}
                            />
                        </div>
                        <div className="info-feild col-2">
                            <label htmlFor="">Nom </label>
                            <input
                                // onChange={(e) => handleFieldChange(e)}
                                type="text"
                                name="creationDate"
                                defaultValue={data?.["last-name"]?.[0] || ""}
                                value={data?.["last-name"]?.[0]}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="info-feild col-2">
                            <label htmlFor="">Nom de naissance </label>
                            <input
                                // onChange={(e) => handleFieldChange(e)}
                                type="text"
                                name="sirenNumber"
                                defaultValue={data?.["last-name"]?.[0] || ""}
                                value={data?.["last-name"]?.[0]}
                            />
                        </div>
                        <div className="info-feild col-2">
                            <label htmlFor="">Prénom </label>
                            <input
                                // onChange={(e) => handleFieldChange(e)}
                                name="rcsNumber"
                                type="text"
                                defaultValue={data?.name?.[0] || ""}
                                value={data?.name?.[0]}
                            />
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="section-title">Info Personnelles</div>
                    <div className="row">
                        <div className="info-feild col-2">
                            <label htmlFor="">N° de document</label>
                            <input
                                // onChange={(e) => handleFieldChange(e)}
                                name="representativeName"
                                type="text"
                                defaultValue={data?.predictions?.label || ""}
                                value={data?.predictions?.label}
                            />
                        </div>
                        <div className="info-feild col-2">
                            <label htmlFor="">Date de délivrance</label>
                            <input
                                // onChange={(e) => handleFieldChange(e)}
                                name="representativeType"
                                type="text"
                                defaultValue={data?.predictions?.label || ""}
                                value={data?.predictions?.label}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="info-feild col-2">
                            <label htmlFor="">Autorité </label>
                            <input
                                // onChange={(e) => handleFieldChange(e)}
                                name="representativeType"
                                type="text"
                                defaultValue={data?.predictions?.label || ""}
                                value={data?.predictions?.label}
                            />
                        </div>
                        <div className="info-feild col-2">
                            <label htmlFor="">Date de naissance </label>
                            <input
                                // onChange={(e) => handleFieldChange(e)}
                                name="representativeType"
                                type="text"
                                defaultValue={data?.predictions?.label || ""}
                                value={data?.predictions?.label}
                            />
                        </div>{" "}
                    </div>
                    <div className="row">
                        <div className="info-feild col-2">
                            <label htmlFor="">Pays de naissance </label>
                            <input
                                // onChange={(e) => handleFieldChange(e)}
                                name="representativeType"
                                type="text"
                                defaultValue={data?.predictions?.label || ""}
                                value={data?.predictions?.label}
                            />
                        </div>
                        <div className="info-feild col-2">
                            <label htmlFor="">Adresse</label>
                            <input
                                // onChange={(e) => handleFieldChange(e)}
                                name="representativeType"
                                type="text"
                                defaultValue={data?.predictions?.label || ""}
                                value={data?.predictions?.label}
                            />
                        </div>
                    </div>
                </div>
                <div className="button-container">
                    <button type="submit">Sauvegarder</button>
                </div>
            </form>
        </div>
    );
};

export default DocumentDataDisplay;
