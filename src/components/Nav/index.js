import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav (props) {
    const {
        navLinks = [],
        setCurrentLink,
        currentLink
    } = props

    useEffect(()=> {
        document.title = capitalizeFirstLetter(currentLink.name);
    },[currentLink]);

    return (
        
        <header>
            <nav>
                <h1 id="header" className="header">Purvi Mecwan</h1>
                <ul className="flex-row">
                    {navLinks.map ((navLink) => (
                        <li className={` mx-2 ${
                            currentLink.name === navLink.name && 'navActive'
                        }` }
                        key={navLink.name} >
                            <span onClick={() => {setCurrentLink(navLink)}}>
                                {capitalizeFirstLetter(navLink.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;