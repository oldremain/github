import React, { useState } from "react";
import { useAppDispatch} from "../../../hooks/hooks";
import { fetchUser } from "../../../features/user/userSlice";
import { fetchRepos } from "../../../features/repos/reposSlice";
import { useNavigate } from "react-router-dom";

import { ReactComponent as SearchIcon } from "../../../assets/search.svg";

import s from "./SearchBar.module.scss";

const SearchBar: React.FC = () => {
    const [login, setLogin] = useState<string>("")
    const navigate = useNavigate()

    const dispatch = useAppDispatch();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value)
    };

    const handleFormSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();

        dispatch(fetchUser(login));
        dispatch(fetchRepos({ login }));
        setLogin("")

        navigate(`users/${login}`)
    };

    return (
        <div className={s.search_wrap}>
            <form className={s.search_form} onSubmit={handleFormSubmit}>
                <button type="submit" className={s.search_button}>
                    <SearchIcon />
                </button>
                <label htmlFor="search-input" hidden={true}>
                    Searchfield by username
                </label>
                <input
                    value={login}
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
