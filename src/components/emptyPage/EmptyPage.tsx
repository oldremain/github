import React from "react";
import { emptyPageText } from "../../enums/emptyPageText";
import { useAppSelector } from "../../hooks/hooks";
import cn from "classnames";

import s from "./EmptyPage.module.scss";

interface IProps {
    svg: React.ReactNode;
    text: keyof typeof emptyPageText;
}

const EmptyPage: React.FC<IProps> = ({ svg, text }) => {
    const theme = useAppSelector(state => state.theme.theme)

    return (
        <>
            <div className={s.page}>
                <div className={s.page_content}>
                    <div className={cn(s.page_icon, {[s.page_icon__dark]: theme === 'dark'})}>
                        {svg}
                    </div>
                    <div className={s.page_text}>{emptyPageText[text]}</div>
                </div>
            </div>
        </>
    );
};

export default EmptyPage;
