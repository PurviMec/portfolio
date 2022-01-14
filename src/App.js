import React, { useState } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Links from './components/Links';

function App() {
    
    const [navLinks] = useState ([
        {
            name: "About Me"
        },
        {
            name: "Portfolio"
        },
        {
            name: "Contact"
        },
        {
            name: "Resume"
        }
    ]);

    const [ currentLink, setCurrentLink ] = useState(navLinks[0]);
    
    return (
        <div>
            <Nav
                navLinks= {navLinks}
                setCurrentLink= {setCurrentLink}
                currentLink= {currentLink}
            ></Nav>
            <main>
                <Links></Links>
            </main>
            <Footer></Footer> 
        </div>
    );
}

export default App;
