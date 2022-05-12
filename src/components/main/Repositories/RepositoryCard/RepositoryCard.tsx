import React from "react";
import { RepoType } from "../../../../features/repos/reposSlice";

import s from "../Repositories.module.scss";

const RepositoryCard: React.FC<RepoType> = ({ name, description }) => {
    return (
        <>
            <div className={s.repository_card}>
                <h4 className={s.repository_name}>{name}</h4>
                <p className={s.repository_description}>
                    {description ? description : "Not description yet"}
                </p>
            </div>
        </>
    );
};

export default RepositoryCard;
