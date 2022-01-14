import React, { useState } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Links from './components/Links';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

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
                <ContactForm></ContactForm>
                <Portfolio></Portfolio>
                <Resume></Resume>
            </main>
            <Footer></Footer> 
        </div>
    );
}

export default App;
