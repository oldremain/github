import React from "react";
import { ReactComponent as EmptyRep } from "../../assets/emptyRep.svg";

import s from "./ReposNotFound.module.scss";

const ReposNotFound: React.FC = () => {
    return (
        <div className={s.emptyPage}>
            <div className={s.emptyPage_content}>
                <EmptyRep />
                <div className={s.emptyPage_text}>Repository list is empty</div>
            </div>
        </div>
    );
};

export default ReposNotFound;
