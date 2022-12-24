import React from "react";
import { Link } from "react-router-dom";
import navBar from "../util/Header-data";


const Header = () => {


    return (
        <header>
            <div className="logo">
                <h1><Link to={navBar[0].link}>INPSAC</Link></h1>
            </div>
            <nav>
                {navBar.map(link => {

                    return (
                        <div key={link.id}>
                            <Link to={link.link}>{link.text}</Link>
                        </div>
                    )
                }
                )}
            </nav>
        </header>
    )
}

export default Header;