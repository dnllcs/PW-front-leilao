import React from "react";
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
    const navigate = useNavigate();
    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("email");
        navigate("/login");
    }

    return <Button onClick={logout} label="logout" className="button" />;
}
export default LogoutButton;