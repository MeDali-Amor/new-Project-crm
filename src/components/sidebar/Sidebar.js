import React, { useEffect, useState } from "react";
import { sidebarLinks } from "./data";
import SidebarElement from "./SidebarElement";
import "./Sidebar.scss";
const Sidebar = () => {
    const [navbarElements, setNavbarElements] = useState(sidebarLinks);
    // useEffect(() => {
    //     if (userRole === "dcrd") setNavbarElements(DCRDNavbar);
    //     else if (userRole === "adminIt") setNavbarElements(AdmiItNavbar);
    // }, [, userRole]);
    return (
        <div className="sidebar">
            <div className="sidebarTitle">Menu</div>
            <nav className="sidebarNav">
                <ul className="sidebarList">
                    {navbarElements.length > 0 &&
                        navbarElements.map((el) => (
                            <SidebarElement
                                key={el.id}
                                title={el.title}
                                url={el.url}
                                logo={el.logo}
                                subEl={el.subEl}
                            />
                        ))}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
