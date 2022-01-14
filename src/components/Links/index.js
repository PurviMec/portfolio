import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import About from "../About";

function Links (props) {
    const currentLink = {
        name: "Portfolio"
    }
    return(
        <section>
            <h2>{capitalizeFirstLetter(currentLink.name)}</h2>
            <About></About>
        </section>
    )
}

export default Links;