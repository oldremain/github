import React from "react";
import { useAppSelector } from "../../../../hooks/hooks";

import { ReactComponent as Followers } from "../../../../assets/followers.svg";
import { ReactComponent as Following } from "../../../../assets/following.svg";

import s from "../Profile.module.scss";

const getFollowerCount = (value: number): string => {
    if (value >= 1000 && value < 1e6) {
        const result = (Math.floor(value / 100) / 10).toString();

        return result.endsWith("0") ? Math.trunc(+result) + "k" : result + "k";
    } else {
        return value.toFixed();
    }
};

const Info: React.FC = () => {
    const {
        name,
        login,
        followers,
        following,
        public_repos,
        avatar_url,
        html_url,
    } = useAppSelector((state) => state.user.user);

    return (
        <>
            <div className={s.profile_info}>
                <span className={s.profile_name}>{name}</span>
                <a
                    href={html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.profile_userName}
                >
                    {login}
                </a>
                <div className={s.profile_statistic}>
                    <div className={s.profile_followers}>
                        <Followers />
                        <span>{getFollowerCount(followers)} followers</span>
                    </div>
                    <div className={s.profile_following}>
                        <Following />
                        <span>{getFollowerCount(following)} following</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Info;
