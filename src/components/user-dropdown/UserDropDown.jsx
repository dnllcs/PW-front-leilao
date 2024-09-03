import React, { useRef } from "react";
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { useNavigate } from "react-router-dom";

const UserDropDown = () => {
    const menuRef = useRef(null);
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        navigate("/login");
    }

    const items = [
        {
            label: 'Profile',
            icon: 'pi pi-user',
            command: () => navigate("/user/profile")
        },
        {
            label: 'Settings',
            icon: 'pi pi-cog',
            command: () => console.log('Settings clicked')
        },
        {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command: () => logout()
        } 
    ];
    return (
        <div className="user-dropdown">
            <Menu model={items} ref={menuRef} popup />
            <Button
                icon={<Avatar image="https://avatars.githubusercontent.com/u/163360166?s=48&v=4" shape="circle" />}
                className="p-button-rounded p-button-text"
                onClick={(e) => menuRef.current.toggle(e)}
            />
        </div>
    );
}

export default UserDropDown;