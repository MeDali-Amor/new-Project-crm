import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useMatch, useResolvedPath } from "react-router-dom";
import "./Sidebarelment.scss";
import SubSidebarElement from "./SubSidebarElement";

const SidebarElement = ({ title, url, logo, subEl }) => {
    const [isActive, setIsActive] = useState("");
    const [height, setHeight] = useState("0px");
    const [rotate, setRotate] = useState("rotate_arrow_icon");

    let resolved = useResolvedPath(url);
    let match = useMatch({ path: resolved.pathname, end: true });
    let dropRef = useRef();
    let subContent = useRef(null);

    const toggleAccordion = () => {
        setIsActive(isActive === "" ? "activated" : "");
        setHeight(
            isActive === "activated"
                ? "0px"
                : `${subContent.current.scrollHeight}px`
        );
        setRotate(isActive === "activated" ? "rotate_arrow_icon" : "");
    };

    useEffect(() => {
        const handler = (e) => {
            if (
                !dropRef.current?.contains(e.target) &&
                !subContent.current?.contains(e.target)
                // &&  match == false
            ) {
                setIsActive("");
                // setTimeout(setHeight("0px"), 1000);
                setHeight("0px");
                setRotate("rotate_arrow_icon");
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });
    return (
        <div>
            <li onClick={toggleAccordion} ref={dropRef}>
                <Link
                    // className="link"
                    className={
                        match ? "sidebarElement activated" : "sidebarElement"
                    }
                    to={url.length > 0 && `${url}`}
                    // style={{ background: match ? "#effcef" : "none" }}
                >
                    <div className="sidebarElContent">
                        <span className="sidebarElLogo">
                            {/* <img src={logo} alt="side bar element logo" /> */}
                            <i className={logo}></i>
                        </span>
                        <span className="sidebarElTitle">{title}</span>
                    </div>
                    {subEl.length > 0 && (
                        <span className={`dropdownArrow ${rotate}`}>
                            {/* <img src="/static/icons/dropdown.png" alt="" /> */}
                            <i className="fa-solid fa-angle-down"></i>
                        </span>
                    )}
                    {/* {match && "active"} */}
                </Link>
            </li>
            <div
                className="submenu"
                ref={subContent}
                style={{ maxHeight: `${height}` }}
            >
                {subEl.map((sub) => (
                    <SubSidebarElement
                        key={sub.id}
                        title={sub.title}
                        logo={sub.logo}
                        url={sub.url}
                        isActive={isActive}
                    />
                ))}
            </div>
        </div>
    );
};

export default SidebarElement;
