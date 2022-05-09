import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

import "./App.scss";

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Main />
        </>
    );
};

export default App;
