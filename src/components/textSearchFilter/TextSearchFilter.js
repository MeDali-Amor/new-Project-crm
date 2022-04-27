import React from "react";
import "./textSearchFilter.scss";
const TextSearchFilter = ({
    placeholderText = "search",
    onSubmit,
    searchInput,
    setSearchInput,
}) => {
    return (
        <div className="searchWrapper">
            <form className="textSearchField" onSubmit={(e) => onSubmit(e)}>
                <input
                    type="search"
                    className="searchTerm"
                    placeholder={placeholderText}
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <button type="submit" className="searchButton">
                    <i className="fa fa-search"></i>
                </button>
            </form>
        </div>
    );
};

export default TextSearchFilter;
