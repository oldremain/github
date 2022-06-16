import React from "react";
import { RepoType } from "../../../../features/repos/reposTypes";

import s from "../Repositories.module.scss";

const RepositoryCard: React.FC<RepoType> = ({ name, description, html_url }) => {
    
    return (
        <li className={s.repository_card}>
            <a
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={s.repository_name}
            >
                {name}
            </a>
            <p className={s.repository_description}>{!!description ? description : '-'}</p>
        </li>
    );
};

export default RepositoryCard;
