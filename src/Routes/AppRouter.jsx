import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Contact from "../pages/Contact";
import Us from "../pages/Us";
import Store from "../pages/Store";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/Home"/>} />
            <Route path="Home" element={<Home/>} />
            <Route path="Register" element={<Register/>} />
            <Route path="Contact" element={<Contact/>} />
            <Route path="Us" element={<Us/>} />
            <Route path="Store" element={<Store/>} />
        </Routes>
     );
}

export default AppRouter;