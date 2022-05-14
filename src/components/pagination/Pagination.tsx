import React, { useState } from "react";

import s from "./Pagination.module.scss";
import MuiPagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PaginationItem from "@mui/material/PaginationItem";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
//import { queryParams } from "../../enums/queryParams";
import { fetchRepos, PAGE_SIZE } from "../../features/repos/reposSlice";

interface IPaginationProps {
    public_repos: number;
}

const Pagination: React.FC<IPaginationProps> = ({ public_repos }) => {
    //const [page, setPage] = useState<number>(0);//нумерация страниц начинается с нуля

    const dispatch = useAppDispatch();
    const currentPage = useAppSelector((state) => state.repos.page);
    console.log(currentPage);

    const searchFieldValue = useAppSelector((state) => state.user.user.login);
    const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
        console.log(page);
        dispatch(fetchRepos({ searchFieldValue, page }));
    };

    return (
        <Stack
            justifyContent="flex-end"
            alignItems="center"
            direction="row"
            sx={{ mt: "24px" }}
        >
            <div className={s.items_qty}>
                {!!currentPage && currentPage * PAGE_SIZE - 3}-
                {!!currentPage && currentPage * PAGE_SIZE} of {public_repos}{" "}
                items
            </div>
            <MuiPagination
                count={Math.ceil(public_repos / PAGE_SIZE)}
                page={currentPage ? currentPage : 0}
                onChange={handleChange}
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
    );
};

export default Pagination;
