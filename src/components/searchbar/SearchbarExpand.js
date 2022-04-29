import React, { useState, useRef, useEffect } from "react";
import "./textSearchFilter.scss";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "../loader/Loader";
import { useDebounce } from "../../hooks/debounceHook";
import axios from "axios";

const containerVariants = {
    expanded: {
        height: "100%",
    },
    collapsed: {
        height: "50px",
    },
};
const containerTransitions = {
    type: "spring",
    damping: 22,
    stiffness: 150,
};

const SearchbarExpand = ({ placeholderText = "search", handleClick }) => {
    const [companies, setCompanies] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    let containerRef = useRef();
    let inputRef = useRef();
    const changeHandler = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
        // console.log(e.target.value);
    };
    const prepareSearchQuery = (query) => {
        query = encodeURIComponent(query);
        // query = query.replace("+", "%2B");
        const url = `http://localhost:8000/api/search?q=${query}`;
        return encodeURI(url);
        // console.log(query);
    };
    const handleSearch = async () => {
        if (!searchQuery || searchQuery.trim === "") return;
        setIsLoading(true);
        const URL = prepareSearchQuery(searchQuery);
        // console.log(URL);
        try {
            const res = await axios.get(URL);
            setCompanies(res.data.companies);
            // console.log(companies);
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };
    useDebounce(searchQuery, 500, handleSearch);
    const expandContainer = () => {
        setIsExpanded(true);
    };
    const collapseContainer = () => {
        setIsExpanded(false);
        // setSearchQuery("");
        setIsLoading(false);
        // if (inputRef.current) inputRef.current.value = "";
    };
    const resetSearch = () => {
        collapseContainer();
        setSearchQuery("");
        setCompanies([]);
    };
    useEffect(() => {
        const handler = (e) => {
            if (!containerRef?.current.contains(e.target)) {
                collapseContainer();
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });
    return (
        <div className="serachbar-wrapper">
            <div className="wrapper">
                <motion.div
                    className="searchbar-container"
                    animate={isExpanded ? "expanded" : "collapsed"}
                    variants={containerVariants}
                    transition={containerTransitions}
                    ref={containerRef}
                >
                    <div className="serach-input-container">
                        <div className="search-icon">
                            <i className="fa fa-search"></i>
                        </div>
                        <input
                            ref={inputRef}
                            type="text"
                            className="search-input"
                            placeholder={placeholderText}
                            value={searchQuery}
                            onChange={changeHandler}
                            // onChange={(e) => (
                            //     setSearchInput(e.target.value),
                            //     console.log(e.target.value)
                            // )}
                            onFocus={expandContainer}
                        />
                        <AnimatePresence>
                            {searchQuery.length > 0 && (
                                <motion.div
                                    className="close-icon"
                                    onClick={resetSearch}
                                    key="close-btn"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <i className="fa fa-xmark"></i>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        {/* <button
                    type="submit"
                    className="searchButton"
                    onClick={(e) => onSubmit(e)}
                >
                    
                </button> */}
                    </div>
                    {/* {isExpanded && <div>hello</div>}
                     */}
                    <span className="line-divider"></span>
                    <div className="search-content">
                        {isLoading && (
                            <div className="loading-wrapper">
                                <Loader />
                            </div>
                        )}
                        {companies.length > 0 &&
                            companies.map((el) => (
                                <SearchbarResult
                                    key={el._id}
                                    el={el}
                                    handleClick={handleClick}
                                    collapseContainer={collapseContainer}
                                />
                            ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SearchbarExpand;

const SearchbarResult = ({ el, handleClick, collapseContainer }) => {
    const click = (el) => {
        handleClick(el);
        collapseContainer();
    };
    return (
        <div className="serach-result" onClick={() => click(el)}>
            <span className="result-info">
                <span className="info-main">{el.name}</span>
                <span className="info-secondary">{el.sirenNumber}</span>
            </span>
            <span className="result-info">
                <i class="fa-solid fa-location-dot"></i>
                <span className="info-adress">{el?.address?.city}</span>
                <span className="info-adress">({el?.address?.zipcode})</span>
            </span>
        </div>
    );
};
