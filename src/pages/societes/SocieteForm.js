import React from "react";
import "./SocieteForm.scss";
const SocieteForm = ({ companyData }) => {
    const handleAddresseChange = (e) => {
        const { name, value } = e.target;
        const address = { ...companyData.address, [name]: value };
        console.log(address);
    };
    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        const companyAlt = { ...companyData, [name]: value };
        console.log(companyAlt);
    };
    console.log(companyData);
    return (
        <div className="societe-form-container">
            <form>
                <div className="section">
                    <div className="section-title">General</div>
                    <div className="row">
                        <div className="info-feild col-2">
                            <label htmlFor="">Dénomination Sociale</label>
                            <input
                                onChange={(e) => handleFieldChange(e)}
                                name="name"
                                type="text"
                                defaultValue={companyData?.name || ""}
                            />
                        </div>
                        <div className="info-feild col-2">
                            <label htmlFor="">Date de création</label>
                            <input
                                onChange={(e) => handleFieldChange(e)}
                                type="date"
                                name="creationDate"
                                defaultValue={companyData?.creationDate || ""}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="info-feild col-2">
                            <label htmlFor="">Siren</label>
                            <input
                                onChange={(e) => handleFieldChange(e)}
                                type="text"
                                name="sirenNumber"
                                defaultValue={companyData?.sirenNumber || ""}
                            />
                        </div>
                        <div className="info-feild col-2">
                            <label htmlFor="">RCS</label>
                            <input
                                onChange={(e) => handleFieldChange(e)}
                                name="rcsNumber"
                                type="text"
                                defaultValue={companyData?.rcsNumber || ""}
                            />
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="section-title">Derigant</div>
                    <div className="row">
                        <div className="info-feild col-2">
                            <label htmlFor="">Nom</label>
                            <input
                                onChange={(e) => handleFieldChange(e)}
                                name="representativeName"
                                type="text"
                                defaultValue={
                                    companyData?.representativeName || ""
                                }
                            />
                        </div>
                        <div className="info-feild col-2">
                            <label htmlFor="">Type</label>
                            <input
                                onChange={(e) => handleFieldChange(e)}
                                name="representativeType"
                                type="text"
                                defaultValue={
                                    companyData?.representativeType || ""
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="section-title">Adresse</div>
                    <div className="row">
                        <div className="info-feild col-3">
                            <label htmlFor="">Adresse</label>
                            <input
                                onChange={(e) => handleAddresseChange(e)}
                                type="text"
                                name="adresse"
                                defaultValue={
                                    companyData?.address?.adresse || ""
                                }
                            />
                        </div>
                        <div className="info-feild col-3">
                            <label htmlFor="">Ville</label>
                            <input
                                onChange={(e) => handleAddresseChange(e)}
                                name="city"
                                type="text"
                                defaultValue={companyData?.address?.city || ""}
                            />
                        </div>
                        <div className="info-feild col-3">
                            <label htmlFor="">Pays</label>
                            <input
                                onChange={(e) => handleAddresseChange(e)}
                                type="text"
                                name="country"
                                defaultValue={
                                    companyData?.address?.country || ""
                                }
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

export default SocieteForm;
