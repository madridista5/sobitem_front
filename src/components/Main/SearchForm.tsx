import React, {SyntheticEvent, useContext, useState} from "react";
import {SearchContext} from "../../contexts/search.context";

import '../../styles/SearchForm.css';

export const SearchForm = () => {
    const {setSearch} = useContext(SearchContext);
    const [inputVal, setInputVal] = useState('');

    const setSearchFromLocalState = (e: SyntheticEvent) => {
        e.preventDefault();
        setSearch(inputVal);
    };

    return (
        <div className="search-form">
            <form onSubmit={setSearchFromLocalState} className="search-form-form">
                <input type="text" placeholder="znajdź produkt" value={inputVal}
                       onChange={e => setInputVal(e.target.value)}/>
                <button>Szukaj</button>
            </form>
        </div>
    );
};