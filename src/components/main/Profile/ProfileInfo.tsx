import React from "react";
import ProfileImage from "./Image/ProfileImage";

import s from "./ProfileInfo.module.scss";

const ProfileInfo: React.FC = () => {
    return (
        <>
            <div className={s.main_profile}>
                <ProfileImage />
            </div>
        </>
    );
};

export default ProfileInfo;
