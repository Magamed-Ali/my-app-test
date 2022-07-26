import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import Pagination from "./Pagination";


function Beer({data, getId}) {

    const [currentPage, setCurrentPage] = useState(1);
    const [cuntriesPerPage] = useState(6);

    const lastCountryIndex = currentPage * cuntriesPerPage
    const firstCountryIndex = lastCountryIndex - cuntriesPerPage
    const currentCountry = data.slice(firstCountryIndex, lastCountryIndex)

    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <div className="block-beer">

            <div className="row block-row">
                {
                    currentCountry.map(beer => (
                        <>
                            <NavLink

                                to="/beer"
                                onClick={() => getId(beer.id)}
                            >
                                <div className="col s6 l4 m4 xl2 beer">
                                    <div className="card">
                                        <div className="card-image beer-card">
                                            <img src={beer.image_url}/>
                                        </div>

                                        <div className="card-content card-bottom">
                                            <h6>{beer.name}</h6>
                                            <p>{beer.description.length <= 140 ?
                                                beer.description :
                                                `${beer.description.slice(0, 140)} ...`}</p>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </>
                    ))
                }

            </div>
            <div className="pagination">
                <Pagination
                    cuntriesPerPage={cuntriesPerPage}
                    totalCountries={data.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            </div>
        </div>

    );
}

export default Beer;