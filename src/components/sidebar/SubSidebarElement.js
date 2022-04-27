import React from "react";
import "./Sidebarelment.scss";
import { Link, NavLink, useMatch, useResolvedPath } from "react-router-dom";

const SubSidebarElement = ({ title, logo, url }) => {
    let resolved = useResolvedPath(url);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <li>
                <Link
                    className={
                        match ? "sidebarElement activated" : "sidebarElement"
                    }
                    to={url.length > 0 && `${url}`}
                    // activeStyle={{ color: "red" }}
                >
                    <div className="sidebarElContent">
                        <span className="sidebarElLogo">
                            {/* <img src={logo} alt="side bar element logo" /> */}
                            <i className={logo}></i>
                        </span>
                        <span className="sidebarElTitle">{title}</span>
                    </div>
                </Link>
            </li>
        </div>
    );
};

export default SubSidebarElement;
