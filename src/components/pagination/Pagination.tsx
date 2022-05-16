import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchRepos } from "../../features/repos/reposSlice";
import { getCurrentPageInfo } from '../../helpers/functions'
import { PAGE_SIZE } from "../../constants/constants";

import { Pagination as MuiPagination, Stack, PaginationItem } from "@mui/material";

import s from "./Pagination.module.scss";

interface IPaginationProps {
    public_repos: number;
}

const Pagination: React.FC<IPaginationProps> = ({ public_repos }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const navigate = useNavigate()

    const dispatch = useAppDispatch();
    const login = useAppSelector((state) => state.user.user.login);

    const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
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
                onChange={handleChangePage}
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
