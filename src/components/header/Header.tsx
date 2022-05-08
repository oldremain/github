import s from "./Header.module.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = () => {
    return (
        <>
            <header className={s.header}>
                <Logo />
            </header>
        </>
    );
};

export default Header;
