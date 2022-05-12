import React from "react";
import { useAppSelector } from "../../../../hooks/hooks";

import { ReactComponent as Followers } from "../../../../assets/followers.svg";
import { ReactComponent as Following } from "../../../../assets/following.svg";

import s from "../Profile.module.scss";

const Info: React.FC = () => {
    const { name, login, followers, following, public_repos, avatar_url } =
        useAppSelector((state) => state.user);

    return (
        <>
            <div className={s.profile_info}>
                <span className={s.profile_name}>{login}</span>
                <span className={s.profile_userName}>{name}</span>
                <div className={s.profile_statistic}>
                    <div className={s.profile_followers}>
                        <Followers />
                        <span>{followers} followers</span>
                    </div>
                    <div className={s.profile_following}>
                        <Following />
                        <span>{following} following</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Info;
