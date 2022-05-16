import React from "react";
import { useAppSelector } from "./hooks/hooks";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Loader from "./components/loader/Loader";
import EmptyPage from "./components/emptyPage/EmptyPage";
import { ReactComponent as NotFoundIcon } from "./assets/notfound.svg";
import { ReactComponent as SearchIcon } from "./assets/search.svg";

import s from "./App.module.scss";

const App: React.FC = () => {
    const isReposLoading = useAppSelector((state) => state.repos.loading);
    const isUserLoading = useAppSelector((state) => state.user.loading);
    const { login } = useAppSelector((state) => state.user.user);
    const { error } = useAppSelector((state) => state.user);

    const isLoading = isReposLoading || isUserLoading;

    return (
        <div className={s.app}>
            <Header />

            {isLoading && !error && <Loader />}

            {!login && !isLoading && !error && (
                <EmptyPage svg={<SearchIcon />} text="initial" />
            )}

            {error && <EmptyPage svg={<NotFoundIcon />} text="userNotFound" />}

            {login && !error && !isUserLoading && <Main />}            
        </div>
    );
};

export default App;
