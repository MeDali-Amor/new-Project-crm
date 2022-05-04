import React, { useState } from "react";
import axios from "axios";
import "./societe.scss";
import SocieteForm from "./SocieteForm";
import SearchbarExpand from "../../components/searchbar/SearchbarExpand";
import Loader from "../../components/loader/Loader";

const Societe = () => {
    // const [searchInput, setSearchInput] = useState("");
    const [companyData, setCompanyData] = useState(null);
    const [loading, setLoading] = useState(false);
    const getCompanyInfo = async (el) => {
        setLoading(true);
        setCompanyData(el);
        setLoading(false);
    };
    const scrapeCompanyInfo = async (el) => {
        // console.log(el);
        try {
            setCompanyData(null);
            setLoading(true);

            const data = {
                url: el.url,
            };
            const res = await axios.post(
                "http://localhost:8000/api/scrape-by-url",
                data
            );

            setCompanyData(res.data.company);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }

        // setCompanyData(el);
    };
    // const SearchSubmit = async (e) => {
    //     e.preventDefault();
    //     if (searchInput) {
    //         const data = {
    //             url: searchInput,
    //         };
    //         try {
    //             const res = await axios.post(
    //                 "http://localhost:8000/api/scrape-by-url",
    //                 data
    //             );
    //             setCompanyData(res.data.newCompany);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    // };
    return (
        <div className="societe-page-wrapper">
            <div className="first-section">
                <div className="first-section-text">
                    <h2 className="first-section-title">Sociétés</h2>
                    <p>
                        Vous êtes à la recherche des informations sur une
                        entreprise?
                    </p>
                </div>
                <div className="seach-box-container">
                    <SearchbarExpand
                        placeholderText="Taper le nom de la société ou le numero Siren"
                        // onSubmit={SearchSubmit}
                        // searchInput={searchInput}
                        // setSearchInput={setSearchInput}
                        getCompanyInfo={getCompanyInfo}
                        scrapeCompanyInfo={scrapeCompanyInfo}
                    />
                </div>
            </div>
            {companyData !== null && companyData !== undefined ? (
                <div className="second-section">
                    <SocieteForm companyData={companyData} />
                </div>
            ) : loading ? (
                <div className="loading-wrapper">
                    <Loader />
                </div>
            ) : null}
        </div>
    );
};

export default Societe;
