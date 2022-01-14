import React from "react";

function Nav () {
    const navLinks = [
        {
            name: "Portfolio",
            description: "Short para about me"
        },
        {
            name: "Contact",
            description: "Short para about me"
        },
        {
            name: "Resume",
            description: "Short para about me"
        }
    ]

    function navLinkSelected(){
        console.log('Hello')
    }

    return (
        
        <header>
            <nav>
                <h1 id="header" className="header">Purvi Mecwan</h1>
                <ul className="flex-row">
                    <li>
                        <a href="#about">About Me</a>
                    </li>
                    {navLinks.map ((navLink) => (
                        <li className="mx-2" key={navLink.name} >
                            <span onClick={() => navLinkSelected(navLink.name)}>
                                {navLink.name}
                            </span>
                        </li>
                    ))}
                </ul>
                <div id="about">
                    <p>
                        enrijngi
                    </p>
                </div>
            </nav>
        </header>
    )
}

export default Nav;