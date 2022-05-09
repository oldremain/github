import React from "react";
import { ReactComponent as Followers } from "../../../../assets/followers.svg";
import { ReactComponent as Following } from "../../../../assets/following.svg";

import s from "../Profile.module.scss";
console.log(s);

const Info: React.FC = () => {
    return (
        <>
            <div className={s.profile_info}>
                <span className={s.profile_name}>Dan Abramov</span>
                <span className={s.profile_userName}>gaearon</span>
                <div className={s.profile_statistic}>
                    <div className={s.profile_followers}>
                        <Followers />
                        <span>65.8k followers</span>
                    </div>
                    <div className={s.profile_following}>
                        <Following />
                        <span>171 following</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Info;
