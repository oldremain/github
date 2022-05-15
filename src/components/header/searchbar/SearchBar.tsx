import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
//import { updateValue } from "../../../features/searchField/searchFieldSlice";
import { fetchUser } from "../../../features/user/userSlice";
import { fetchRepos } from "../../../features/repos/reposSlice";

import { ReactComponent as SearchIcon } from "../../../assets/search.svg";

import s from "./SearchBar.module.scss";

const SearchBar: React.FC = () => {
    const [searchValue, setSearchValue] = useState("")
    console.log(searchValue)
    //const searchFieldValue = useAppSelector((state) => state.searchField.value);
    const dispatch = useAppDispatch();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //dispatch(updateValue(e.target.value));
        setSearchValue(e.target.value)
    };

    const handleFormSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();

        dispatch(fetchUser(searchValue));
        dispatch(fetchRepos({ searchValue }));
        setSearchValue("")
       // dispatch(updateValue(""));
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
                    value={searchValue}
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
