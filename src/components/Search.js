import React, {useState} from 'react';

function Search(props) {

    const {SearchBeer = Function.prototype} = props;

    const [search, setSearch] = useState('')

    const handleKey = (event) => {
        if(event.key === 'Enter'){
            SearchBeer(search);
        }
    }
    return (
        <div>
            <div className="input-field">
                <input
                    placeholder="Search"
                    type="search"
                    className="validate"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKey}
                />
                <button
                    className="btn search-btn"
                    onClick={() =>  props.Search1(search)}>Search</button>
            </div>
        </div>
    );
}

export default Search;