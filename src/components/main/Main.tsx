import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Repositories from "./Repositories/Repositories";

import s from "./Main.module.scss";

const Main: React.FC = () => {
    return (
        <div className={s.main}>
            <main className={s.main_container}>
                <ProfileInfo />
                <Repositories />
            </main>
        </div>
    );
};

export default Main;
