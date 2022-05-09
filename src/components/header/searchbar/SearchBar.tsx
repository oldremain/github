import { ReactComponent as SearchIcon } from "../../../assets/search.svg";

import s from "./SearchBar.module.scss";

const SearchBar: React.FC = () => {
    return (
        <div className={s.search_wrap}>
            <form className={s.search_form}>
                <button type="submit" className={s.search_button}>
                    <SearchIcon />
                </button>
                <label htmlFor="search-input" hidden={true}>
                    Search
                </label>
                <input
                    type="text"
                    id="search-input"
                    autoComplete="off"
                    className={s.search_input}
                />
            </form>
        </div>
    );
};

export default SearchBar;
