import React from "react";

import s from "../Repositories.module.scss";

const RepositoryCard: React.FC = () => {
    return (
        <>
            <div className={s.repository_card}>
                <h4 className={s.repository_name}>react-hot-loader</h4>
                <p className={s.repository_description}>
                    Tweak React components in real time. Deprecated: use Fast
                    Refresh instead.
                </p>
            </div>
        </>
    );
};

export default RepositoryCard;
