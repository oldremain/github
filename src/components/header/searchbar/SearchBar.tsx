import React, { useState } from "react";
import { useAppDispatch } from "../../../hooks/hooks";
import { fetchUser } from "../../../features/user/userSlice";

import { ReactComponent as SearchIcon } from "../../../assets/search.svg";

import s from "./SearchBar.module.scss";

const SearchBar: React.FC = () => {
    const [userName, setUserName] = useState<string>("");
    const dispatch = useAppDispatch();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    const formHandler = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();

        dispatch(fetchUser(userName));
    };

    return (
        <div className={s.search_wrap}>
            <form className={s.search_form} onSubmit={formHandler}>
                <button type="submit" className={s.search_button}>
                    <SearchIcon />
                </button>
                <label htmlFor="search-input" hidden={true}>
                    Searchfield by username
                </label>
                <input
                    value={userName}
                    onChange={handleInputChange}
                    type="text"
                    id="search-input"
                    placeholder="Enter GitHub username"
                    autoComplete="off"
                    className={s.search_input}
                />
            </form>
        </div>
    );
};

export default SearchBar;
