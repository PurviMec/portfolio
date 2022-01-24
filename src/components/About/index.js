import React, {useEffect} from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function About (props) {
    const {
        //navLinks = [],
        //setCurrentLink,
        currentLink
    } = props

    useEffect(()=> {
        document.title = capitalizeFirstLetter(currentLink.name);
    },[currentLink]);
    return(
        <div>
            <h1>{capitalizeFirstLetter(currentLink.name)}</h1>
            <p>
               {currentLink.description} 
            </p>
        </div>
    )
}

export default About;