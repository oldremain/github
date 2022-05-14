import React from "react";
import ReactPaginate from "react-paginate";

import s from "./Pagination.module.scss";
import { ReactComponent as ArrowLeft } from "../../assets/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrowRight.svg";

type ClickParamType = {
    selected: number;
};

const Pagination: React.FC = () => {
    const handlePageClick = ({ selected }: ClickParamType) => {
        console.log(selected + 1);
    };

    return (
        <div className={s.pagination}>
            <ReactPaginate
                pageCount={50}
                initialPage={0}
                marginPagesDisplayed={1}
                // pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={s.pagination_list}
                pageClassName={s.list_item}
                activeClassName={s.active_item}
                activeLinkClassName={s.active_link}
                pageLinkClassName={s.pagination_link}
                breakClassName={s.break_item}
                breakLinkClassName={s.break_link}
                nextClassName={s.next_item}
                nextLinkClassName={s.next_link}
                previousClassName={s.previous_item}
                previousLinkClassName={s.previous_link}
                previousLabel={<ArrowLeft />}
                nextLabel={<ArrowRight />}
            ></ReactPaginate>
        </div>
    );
};

export default Pagination;
