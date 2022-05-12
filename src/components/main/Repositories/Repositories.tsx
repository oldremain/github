import React from "react";
import { useAppSelector } from "../../../hooks/hooks";

import RepositoryCard from "./RepositoryCard/RepositoryCard";
import Pagination from "@mui/material/Pagination";

import s from "./Repositories.module.scss";

const Repositories: React.FC = () => {
    const { public_repos } = useAppSelector((state) => state.user);
    const repositories = useAppSelector((state) => state.repos.list);

    return (
        <>
            <div className={s.main_repositories}>
                <h3 className={s.repositories_title}>
                    Repositories ({public_repos})
                </h3>
                <div className={s.repositories_layout}>
                    {repositories.map((repo) => (
                        <RepositoryCard key={repo.id} {...repo} />
                    ))}

                    <Pagination
                        count={10}
                        siblingCount={3}
                        shape="rounded"
                        color="primary"
                        size="small"
                    />
                </div>
            </div>
        </>
    );
};

export default Repositories;
