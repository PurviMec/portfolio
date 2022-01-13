import React from "react";

function About () {
    const navLinks = [
        {
            name: "About Me",
            description: "Short para about me"
        },
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
                    {navLinks.map ((navLink) => (
                        <li className="mx-2" key={navLink.name} >
                            <span onClick={() => navLinkSelected(navLink.name)}>
                                {navLink.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
            </header>
    )
}

export default About;