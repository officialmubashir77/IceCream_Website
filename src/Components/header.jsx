import React from "react";
import ReactDOM from "react";
import './header.css';
import logo from '../images/logo.png'


const Header = () => {

return (

    <section className="mainBox">
        <div className="logo">
            <img src={logo} />
        </div>
        <div className="lists">
            <ul>
                <li>Home</li>
                <li>about</li>
                <li>blog</li>
                <li>contact</li>
            </ul>
        </div>


    </section>

)

}

export default Header