import React from 'react';

function Preloader(props) {
    return (
        <div className="progress preloader-active">
            <div className="indeterminate preloader"></div>
        </div>
    );
}

export default Preloader;