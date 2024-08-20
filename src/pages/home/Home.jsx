import React from "react";
import "./Home.css";
import { Card } from 'primereact/card';
import LogoutButton from "../../components/LogoutButton";

const Home = () => {
    return (
        <div className="home-container">
            <Card title="home" className="home-card">
                <LogoutButton />
            </Card>
        </div>
    );
}
export default Home;