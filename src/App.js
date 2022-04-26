import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";

function App() {
    return (
        <Routes>
            {/* public pages */}
            <Route path="login" element={<Login />} />
        </Routes>
    );
}

export default App;
