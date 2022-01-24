import React, { useState } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import About from './components/About';

function App() {
    const [navLinks] = useState ([
        {
            name: "About Me",
            description: "ndtzhjnzdfnf"
        },
        {
            name: "Portfolio",
            description: <Portfolio></Portfolio>
        },
        {
            name: "Contact",
            description: <ContactForm></ContactForm>
        },
        {
            name: "Resume",
            description: <Resume></Resume>
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
                <div>
                <About 
                navLinks= {navLinks}
                setCurrentLink= {setCurrentLink}
                currentLink= {currentLink}
                ></About>
                </div>
            </main>
            <Footer></Footer> 
        </div>
    );
}

export default App;
