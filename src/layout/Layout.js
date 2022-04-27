import "./Layout.scss";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/Navbar/Navbar";

const Layout = ({ userRole }) => {
    return (
        <div className="appContainer">
            {/* <Navbar /> */}
            <div className="main">
                <div className="leftSidebar">
                    <Sidebar />
                </div>
                <div style={{ width: "100%" }}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
