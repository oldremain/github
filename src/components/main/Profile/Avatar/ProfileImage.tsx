import React from "react";
import { useAppSelector } from "../../../../hooks/hooks";

import s from "../Profile.module.scss";

const ProfileImage: React.FC = () => {
    const { avatar_url } = useAppSelector((state) => state.user.user);

    return (
        <>
            <div className={s.profile_img}>
                <img src={avatar_url} alt="profile-img" />
            </div>
        </>
    );
};

export default ProfileImage;
