import React from "react";
import { ReactComponent as LogoIcon } from "../../../assets/logo.svg";

import s from "./Logo.module.scss";

const Logo: React.FC = () => {
    return (
        <>
            <a href="/" className="">
                <LogoIcon />
            </a>
        </>
    );
};

export default Logo;
