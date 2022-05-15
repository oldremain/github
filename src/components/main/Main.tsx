import React from "react";
import { useAppSelector } from "../../hooks/hooks";

import Profile from "./Profile/Profile";
import Repositories from "./Repositories/Repositories";
import EmptyPage from "../emptyPage/EmptyPage";
import { ReactComponent as EmptyRep } from "../../assets/emptyRep.svg";

import s from "./Main.module.scss";

const Main: React.FC = () => {
    const repos = useAppSelector((state) => state.repos.list);

    return (
        <div className={s.main}>
            <main className={s.main_container}>
                <Profile />

                {!repos.length 
                    ? 
                        <EmptyPage svg={<EmptyRep />} text="noRepos" />
                    : 
                        <Repositories />}
            </main>
        </div>
    );
};

export default Main;
