import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import Pagination from "../pagination/Pagination";

import s from "./InitialPage.module.scss";

const InitialPage: React.FC = () => {
    return (
        <div className={s.initialPage}>
            <div className={s.introduction}>
                <SearchIcon />
                <div className={s.introduction_text}>
                    Start with searching a GitHub user
                </div>
            </div>
            <Pagination />
        </div>
    );
};

export default InitialPage;
