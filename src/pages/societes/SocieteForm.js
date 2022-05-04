import axios from "axios";
import React, { useEffect, useState } from "react";
import "./SocieteForm.scss";
const SocieteForm = ({ companyData }) => {
    const [data, setData] = useState(null);
    const handleAddresseChange = (e) => {
        const { name, value } = e.target;
        const address = { ...companyData.address, [name]: value };
        // console.log(address);
        const companyAlt = { ...companyData, address };
        setData(companyAlt);
        // console.log(data);
    };
    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        const companyAlt = { ...companyData, [name]: value };
        // console.log(companyAlt);
        setData(companyAlt);
        // console.log(data);
    };
    const handleSaveData = async (e) => {
        e.preventDefault();
        // console.log(data);
        try {
            let submittedData = { ...data };
            const res = await axios.patch(
                `http://localhost:8000/api/company/update/${submittedData._id}`,
                submittedData
            );
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        // setData(null);
        setData(companyData);
        // console.log(companyData);
    }, [companyData, setData]);
    return (
        <div className="societe-form-container">
            <form onSubmit={handleSaveData}>
                <div className="section">
                    <div className="section-title">General</div>
                    <div className="row">
                        <div className="info-feild col-2">
                            <label htmlFor="">Dénomination Sociale</label>
                            <input
                                onChange={(e) => handleFieldChange(e)}
                                name="name"
                                type="text"
                                defaultValue={data?.name || ""}
                                value={data?.name}
                            />
                        </div>
                        <div className="info-feild col-2">
                            <label htmlFor="">Date de création</label>
                            <input
                                onChange={(e) => handleFieldChange(e)}
                                type="date"
                                name="creationDate"
                                defaultValue={data?.creationDate || ""}
                                value={data?.creationDate}
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
                                defaultValue={data?.sirenNumber || ""}
                                value={data?.sirenNumber}
                            />
                        </div>
                        <div className="info-feild col-2">
                            <label htmlFor="">RCS</label>
                            <input
                                onChange={(e) => handleFieldChange(e)}
                                name="rcsNumber"
                                type="text"
                                defaultValue={data?.rcsNumber || ""}
                                value={data?.rcsNumber}
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
                                defaultValue={data?.representativeName || ""}
                                value={data?.representativeName}
                            />
                        </div>
                        <div className="info-feild col-2">
                            <label htmlFor="">Type</label>
                            <input
                                onChange={(e) => handleFieldChange(e)}
                                name="representativeType"
                                type="text"
                                defaultValue={data?.representativeType || ""}
                                value={data?.representativeType}
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
                                defaultValue={data?.address?.adresse || ""}
                                value={data?.address?.adresse}
                            />
                        </div>
                        <div className="info-feild col-3">
                            <label htmlFor="">Ville</label>
                            <input
                                onChange={(e) => handleAddresseChange(e)}
                                name="city"
                                type="text"
                                defaultValue={data?.address?.city || ""}
                                value={data?.address?.city}
                            />
                        </div>
                        <div className="info-feild col-3">
                            <label htmlFor="">Pays</label>
                            <input
                                onChange={(e) => handleAddresseChange(e)}
                                type="text"
                                name="country"
                                defaultValue={data?.address?.country || ""}
                                value={data?.address?.country}
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
