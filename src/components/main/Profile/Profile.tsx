import React from "react";
import ProfileImage from "./Image/ProfileImage";
import ProfileInfo from "./Info/ProfileInfo";

import s from "./Profile.module.scss";

const Profile: React.FC = () => {
    return (
        <>
            <div className={s.main_profile}>
                <ProfileImage />
                <ProfileInfo />
            </div>
        </>
    );
};

export default Profile;
