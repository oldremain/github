import React from "react";
import Profile from "./Profile/Profile";
import Repositories from "./Repositories/Repositories";

import s from "./Main.module.scss";

const Main: React.FC = () => {
    return (
        <div className={s.main}>
            <main className={s.main_container}>
                <Profile />
                <Repositories />
            </main>
        </div>
    );
};

export default Main;
