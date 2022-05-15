import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchRepos, PAGE_SIZE } from "../../features/repos/reposSlice";

import MuiPagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PaginationItem from "@mui/material/PaginationItem";

import s from "./Pagination.module.scss";

interface IPaginationProps {
    public_repos: number;
}

const getCurrentPageInfo = (pageSize: number, reposCount: number, currentPage?: number): string => {
    if (currentPage) {
       const from = currentPage * pageSize - (pageSize - 1);
       const to = currentPage * pageSize > reposCount
                ? reposCount
                : currentPage * pageSize;

    return from === to
        ? `${from} of ${reposCount} item(s)`
        : `${from}-${to} of ${reposCount} item(s)`;
    } else {
        return ''
    }
};

const Pagination: React.FC<IPaginationProps> = ({ public_repos }) => {
    //const [page, setPage] = useState<number>(0);//нумерация страниц начинается с нуля

    const dispatch = useAppDispatch();
    const currentPage = useAppSelector((state) => state.repos.page);

    const searchValue = useAppSelector((state) => state.user.user.login);
    const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
        console.log(page);
        dispatch(fetchRepos({ searchValue, page }));
    };

    const itemsQtyInfo: string = getCurrentPageInfo(
        PAGE_SIZE,
        public_repos,
        currentPage
    );

    return (
        <Stack
            justifyContent="flex-end"
            alignItems="center"
            direction="row"
            sx={{ mt: "24px" }}
        >
            <div className={s.items_qty}>{itemsQtyInfo}</div>
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
