import React from "react";
import profile from "../../../../assets/profile.png";

import s from "../ProfileInfo.module.scss";

const ProfileImage: React.FC = () => {
    return (
        <>
            <div className={s.profile_img}>
                <img src={profile} alt="profile-img" />
            </div>
        </>
    );
};

export default ProfileImage;
