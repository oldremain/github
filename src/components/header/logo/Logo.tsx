import React from "react";
import { ReactComponent as LogoIcon } from "../../../assets/logo.svg";

const Logo: React.FC = () => {
    return (
        <>
            <a href="/">
                <LogoIcon />
            </a>
        </>
    );
};

export default Logo;
