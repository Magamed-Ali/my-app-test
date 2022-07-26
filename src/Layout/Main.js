import React from 'react';
import Beer from "../components/Beer";
import Search from "../components/Search";
import Preloader from "../components/Preloader";

function Main(props) {

    return (
        <div className="main">
            <Search SearchBeer={props.Search}/>

            {
                props.data.length > 0 ? <Beer data={props.data} getId={props.getId}/> : <Preloader/>
            }

        </div>
    );
}

export default Main;