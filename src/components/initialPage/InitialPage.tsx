import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";

import s from "./InitialPage.module.scss";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PaginationItem from "@mui/material/PaginationItem";
import { useAppSelector } from "../../hooks/hooks";
import { queryParams } from "../../enums/queryParams";

const InitialPage: React.FC = () => {
    const repos = useAppSelector((state) => state.repos.list);

    return (
        <div className={s.initialPage}>
            <div className={s.introduction}>
                <SearchIcon />
                <div className={s.introduction_text}>
                    Start with searching a GitHub user
                </div>
            </div>

            <Stack>
                <Pagination
                    count={Math.ceil(queryParams.PAGE_SIZE / repos.length)}
                    siblingCount={1}
                    boundaryCount={2}
                    shape="rounded"
                    color="primary"
                    size="small"
                    renderItem={(item) => {
                        if (item.type === "next" || item.type === "previous") {
                            return (
                                <PaginationItem
                                    sx={{ color: "#808080", fontSize: "14px" }}
                                    {...item}
                                />
                            );
                        }
                        return (
                            <PaginationItem
                                sx={{
                                    color: "#808080",
                                    fontSize: "14px",
                                }}
                                {...item}
                            />
                        );
                    }}
                />
            </Stack>
        </div>
    );
};

export default InitialPage;
