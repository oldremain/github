import React from "react";
import { useAppSelector } from "./hooks/hooks";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import InitialPage from "./components/initialPage/InitialPage";
import UserNotFound from "./components/userNotFound/UserNotFound";

import s from "./App.module.scss";

const App: React.FC = () => {
    const isReposLoading = useAppSelector((state) => state.repos.loading);
    const isUserLoading = useAppSelector((state) => state.user.loading);
    const { html_url } = useAppSelector((state) => state.user.user);

    const isLoading = isReposLoading && isUserLoading;

    return (
        <div className={s.app}>
            <Header />

            {isLoading && <div>Loading...</div>}
            {html_url ? <Main /> : <InitialPage />}
            {/*  */}
            {/* <UserNotFound /> */}
        </div>
    );
};

export default App;
