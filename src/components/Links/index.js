import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import About from "../About";

function Links ({ currentLink }) {
    const { name, description } = currentLink;
    return(
        <section>
            <h2>{capitalizeFirstLetter(name)}</h2>
            {description}
            <About></About>
        </section>
    )
}

export default Links;