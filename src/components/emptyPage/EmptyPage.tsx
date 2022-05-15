import React from "react";
import { emptyPageText } from "../../enums/emptyPageText";

import s from "./EmptyPage.module.scss";

interface IProps {
    svg: React.ReactNode;
    text: keyof typeof emptyPageText;
}

const EmptyPage: React.FC<IProps> = ({ svg, text }) => {
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
