import React, { useTransition } from "react";
import style from "./Home.module.css";
import { Card } from 'primereact/card';
import LogoutButton from "../../components/LogoutButton";
import { useTranslation } from 'react-i18next';
import Header from "../../components/header/Header";


const Home = () => {
    const {t, i18n} = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    } 

    return (  
        <div className="home-container">
            <div className={style.homeContainer}>
                <Card title="home" className={style.homeCard}>
                    <button onClick={() => changeLanguage('en')}>english</button>
                    <button onClick={() => changeLanguage('pt')}>pt</button>
                    <h1>{t('welcome')}</h1>
                    <LogoutButton />
                </Card>

            </div>
        </div>
    );
}
export default Home;