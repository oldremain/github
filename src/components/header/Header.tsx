import React from "react";
import Logo from "./logo/Logo";
import SearchBar from "./searchbar/SearchBar";

import s from "./Header.module.scss";

const Header: React.FC = () => {
    return (
        <>
            <header className={s.header}>
                <Logo />
                <SearchBar />
            </header>
        </>
    );
};

export default Header;
