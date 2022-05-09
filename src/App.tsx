import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

import s from "./App.module.scss";

const App: React.FC = () => {
    return (
        <div className={s.app}>
            <Header />
            <Main />
        </div>
    );
};

export default App;
