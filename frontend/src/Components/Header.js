import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <a href="index.html">
                            <img src="/images/logo.PNG" width="150px"/>
                        </a>
                    </div>
                    <nav>
                        <ul id="Menuitems">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="product.html">Product</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="Account.html">Account</a></li>
                        </ul>
                    </nav>
                    <a href="Add to cart.html"><img src='/images/cart.png' width="30px" height="30px"/></a>
                    <img src="images/menu.png" className="menu_icon" onClick="menutoggle()"/>
                </div>
            </div>
        </div>
    );
};

export default Header;