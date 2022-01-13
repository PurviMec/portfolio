import React from "react";
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from "react-icons/fa";

function Footer () {
    let date = new Date();
    let year = date.getFullYear();
    return(
        <footer>
            <div>
                <span className="mx-2"><AiFillGithub /></span>
                <span className="mx-2"><FaLinkedinIn/></span>
                <span className="mx-2"><AiOutlineTwitter/></span>
                <h3>
                   Design and Developed by Purvi Mecwan ©️ {year}
                </h3>
            </div>
        </footer>
    )
}

export default Footer;