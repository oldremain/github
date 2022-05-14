import React from "react";
import { RepoType } from "../../../../features/repos/reposSlice";

import s from "../Repositories.module.scss";

const RepositoryCard: React.FC<RepoType> = ({
    name,
    description,
    html_url,
}) => {
    return (
        <>
            <div className={s.repository_card}>
                <a
                    href={html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.repository_name}
                >
                    {name}
                </a>
                <p className={s.repository_description}>{description}</p>
            </div>
        </>
    );
};

export default RepositoryCard;
