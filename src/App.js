import React, {useEffect, useState} from 'react';
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Main from "./Layout/Main";
import {Route, Routes} from "react-router-dom";
import Content from "./components/Content";

function App() {

    const [beer, setBeer] = useState(0)
    const [data, setData] = useState([])

    useEffect(()=> {

        fetch('https://api.punkapi.com/v2/beers')
            .then(response => response.json())
            .then(d => setData(d))

    },[])

    function getId(number) {
        return setBeer(number);
    }

    const Search = (name) => {
        fetch(`https://api.punkapi.com/v2/beers?beer_name=${name}`)
            .then(response => response.json())
            .then(d => setData(d))
    }
    return (
            <div>
                <Routes>
                    <Route path='/beer' exact element={<Content data={data} beer={beer}/>} />

                    <Route path='/' exact element={

                        <div>
                            <Header/>
                            <Main data={data} getId={getId} Search={Search}/>
                            <Footer/>
                        </div>

                    }/>}/>
                </Routes>
            </div>
    );
}
export default App;
