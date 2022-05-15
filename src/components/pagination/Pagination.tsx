import React, {useState} from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { fetchRepos } from "../../features/repos/reposSlice";
import { PAGE_SIZE } from "../../constants/constants";

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
    const [currentPage, setCurrentPage] = useState<number>(1);
    const navigate = useNavigate()

    const dispatch = useAppDispatch();
    const login = useAppSelector((state) => state.user.user.login);

    const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page)
        dispatch(fetchRepos({ login, page })); 
        
        navigate(`users/${login}/repos?per_page=${PAGE_SIZE}&page=${page}&sort=created`)             
    };

    const itemsQtyInfo = getCurrentPageInfo(PAGE_SIZE, public_repos, currentPage);

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
                page={currentPage}
                onChange={handleChange}
                siblingCount={1}
                boundaryCount={2}
                shape="rounded"
                color="primary"
                size="small"
                renderItem={(item) => (
                        <PaginationItem
                            sx={{
                                color: "#808080",
                                fontSize: "14px",
                            }}
                            {...item}
                        />
                    )}
            />
        </Stack>
    );
};

export default Pagination;
