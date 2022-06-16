import React from "react";
import Logo from "./logo/Logo";
import SearchBar from "./searchbar/SearchBar";
import ThemeControl from "../theme/ThemeControl";

import s from "./Header.module.scss";

const Header: React.FC = () => {
    return (
        <>
            <header className={s.header}>
                <Logo />
                <SearchBar />
                <ThemeControl/>
            </header>
        </>
    );
};

export default Header;
