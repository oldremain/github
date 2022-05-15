import React from "react";
import { useAppSelector } from "../../../hooks/hooks";

import RepositoryCard from "./RepositoryCard/RepositoryCard";
import Pagination from "../../pagination/Pagination";

import s from "./Repositories.module.scss";

const Repositories: React.FC = () => {
    const repos = useAppSelector((state) => state.repos.list);
    const { public_repos } = useAppSelector((state) => state.user.user);

    return (
        <>
            <div className={s.main_repositories}>
                <h3 className={s.repositories_title}>
                    Repositories ({public_repos})
                </h3>
                <div className={s.repositories_layout}>
                    {repos.map((repo) => (
                        <RepositoryCard key={repo.id} {...repo} />
                    ))}
                </div>
                <Pagination public_repos={public_repos} />
            </div>
        </>
    );
};

export default Repositories;
