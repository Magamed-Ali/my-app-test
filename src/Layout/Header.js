import React from 'react';

function Header(props) {
    return (
        <nav>
            <div className="nav-wrapper header">
                <a href="/" className="brand-logo logo"><i className="fa-solid fa-wine-bottle"></i></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down nav-header">
                    <li><a href="https://t.me/f_amg_1111"><i className="fa-brands fa-telegram"></i></a></li>
                    <li><a href="https://vk.com/id576420378"><i className="fa-brands fa-vk"></i></a></li>
                    <li><a href="https://www.whatsapp.com/?lang=ru"><i className="fa-brands fa-whatsapp-square"></i></a></li>
                    <li><a href="https://www.instagram.com/"><i className="fa-brands fa-instagram-square"></i></a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;