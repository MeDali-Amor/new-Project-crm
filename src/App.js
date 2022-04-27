import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Layout from "./layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import Societe from "./pages/societes/Societe";
import Document from "./pages/documents/Document";

function App() {
    return (
        <Routes>
            {/* public pages */}
            <Route path="login" element={<Login />} />
            <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="companies" element={<Societe />} />
                <Route path="documents" element={<Document />} />
            </Route>
        </Routes>
    );
}

export default App;
