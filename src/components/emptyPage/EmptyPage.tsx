import React from "react";
//import InitialPage from "../initialPage/InitialPage";
//import UserNotFound from "../userNotFound/UserNotFound";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { ReactComponent as NotFoundIcon } from "../../assets/notfound.svg";
import { ReactComponent as EmptyRep } from "../../assets/emptyRep.svg";
import { emptyPageText } from "../../enums/emptyPageText";

import s from "./EmptyPage.module.scss";

interface IProps {
    svg: React.ReactNode;
    text: keyof typeof emptyPageText;
}

const EmptyPage: React.FC<IProps> = ({ svg, text }) => {
    console.log(text);
    return (
        <>
            <div className={s.page}>
                <div className={s.page_content}>
                    <div className={s.page_icon}>{svg}</div>
                    <div className={s.page_text}>{emptyPageText[text]}</div>
                </div>
            </div>
        </>
    );
};

export default EmptyPage;

// {error ? <UserNotFound /> : <InitialPage />}

// interface IProps {
//     error: boolean;
//     login: string;
//     reposCount?: number;
// }

// let content;

// if (!login) {
//     content = (
//         <>
//             <SearchIcon />
//             <div className={s.page_text}>
//                 Start with searching a GitHub user
//             </div>
//         </>
//     );
// } else if (error) {
//     content = (
//         <>
//             <NotFoundIcon />
//             <div className={s.page_text}>User not found</div>
//         </>
//     );
// } else if (!reposCount) {
//     content = (
//         <>
//             <EmptyRep />
//             <div className={s.page_text}>Repository list is empty</div>
//         </>
//     );
// }
