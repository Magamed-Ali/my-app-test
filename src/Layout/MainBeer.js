import React, {useEffect, useState} from 'react';

export  function MainBeer({data, id}) {

    const beer = data.filter(i => i.id === id)

    return (
        <div className="main-beer">
            {
                beer.map(i => (
                    <div className="row">
                        <div className="col">
                            <div className="card card-info">
                                <div className="card-image beer-info">
                                    <img src={i.image_url}/>
                                    <div className="beer-info__card">
                                        <h4>
                                            {i.name}
                                        </h4>
                                        <p>
                                            {i.tagline}
                                        </p>
                                        <p>
                                            {i.description}
                                        </p>
                                        <p>
                                            {i.abv}
                                        </p>
                                        <p>
                                            {i.food_pairing}
                                        </p>
                                    </div>
                                </div>
                                <div className="card-action link">
                                    <a href="/">вернуться назад</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
