import React from 'react';
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import {MainBeer} from "../Layout/MainBeer";

function Content(props) {

    return (
        <div>
            <Header/>
            <MainBeer data={props.data} id={props.beer}/>
            <Footer/>

        </div>
    );
}

export default Content;