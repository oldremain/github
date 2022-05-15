import React from "react";
import { useAppSelector } from "./hooks/hooks";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import InitialPage from "./components/initialPage/InitialPage";
import UserNotFound from "./components/userNotFound/UserNotFound";
import Loader from "./components/loader/Loader";

import s from "./App.module.scss";
import EmptyPage from "./components/emptyPage/EmptyPage";
import { emptyPageText } from "./enums/emptyPageText";
import { ReactComponent as NotFoundIcon } from "./assets/notfound.svg";
import { ReactComponent as SearchIcon } from "./assets/search.svg";

const App: React.FC = () => {
    const isReposLoading = useAppSelector((state) => state.repos.loading);
    const isUserLoading = useAppSelector((state) => state.user.loading);
    const { login } = useAppSelector((state) => state.user.user);
    const { error } = useAppSelector((state) => state.user);

    const isLoading = isReposLoading || isUserLoading;

    return (
        <div className={s.app}>
            <Header />

            {/* //show, what can make with this checkouts */}
            {isLoading && !error && <Loader />}

            {login && !error && !isUserLoading && <Main />}

            {/* {!login && !isLoading && !error && <InitialPage />} */}

            {!login && !isLoading && !error && (
                <EmptyPage svg={<SearchIcon />} text="initial" />
            )}

            {error && <EmptyPage svg={<NotFoundIcon />} text="userNotFound" />}
        </div>
    );
};

export default App;
