import React from "react";
import { ReactComponent as NotFoundIcon } from "../../assets/notfound.svg";

import s from "./UserNotFound.module.scss";

const UserNotFound: React.FC = () => {
    return (
        <div className={s.notFoundPage}>
            <div className={s.notFoundPage_content}>
                <NotFoundIcon />
                <div className={s.notFoundPage_text}>User not found</div>
            </div>
        </div>
    );
};

export default UserNotFound;
