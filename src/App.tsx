import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import InitialPage from "./components/initialPage/InitialPage";
import UserNotFound from "./components/userNotFound/UserNotFound";

import s from "./App.module.scss";

const App: React.FC = () => {
    return (
        <div className={s.app}>
            <Header />
            {/* <Main /> */}

            {/* <InitialPage /> */}
            <UserNotFound />
        </div>
    );
};

export default App;
