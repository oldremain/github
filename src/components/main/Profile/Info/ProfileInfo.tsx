import React from "react";
import { useAppSelector } from "../../../../hooks/hooks";
import { getFollowerCount } from '../../../../helpers/functions'
import cn from "classnames";

import { ReactComponent as FollowersIcon } from "../../../../assets/followers.svg";
import { ReactComponent as FollowingIcon } from "../../../../assets/following.svg";

import s from "../Profile.module.scss";

const ProfileInfo: React.FC = () => {
    const {name, login, followers, following, html_url,} = useAppSelector((state) => state.user.user);
    const theme = useAppSelector(state => state.theme.theme)

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
                    <div className={cn( s.profile_followers, {[s.profile_followers__dark]: theme === 'dark'})}>
                        <FollowersIcon />
                        <span>{getFollowerCount(followers)} followers</span>
                    </div>
                    <div className={cn( s.profile_following, {[s.profile_following__dark]: theme === 'dark'})}>
                        <FollowingIcon />
                        <span>{getFollowerCount(following)} following</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileInfo;
