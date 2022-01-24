import React from "react";
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from "react-icons/fa";

function Footer () {
    let date = new Date();
    let year = date.getFullYear();
    return(
        <footer>
            <div className="footer-div">
                <a className="mx-2" style={{ fontSize: "50px" }} alt="github-icon"><AiFillGithub /></a>
                <a className="mx-2" style={{ fontSize: "50px" }} alt="linkeDin-icon"><FaLinkedinIn/></a>
                <a className="mx-2" style={{ fontSize: "50px" }} alt="twitter-icon"><AiOutlineTwitter/></a>
                <h3>
                   Design and Developed by Purvi Mecwan ©️ {year}
                </h3>
            </div>
        </footer>
    )
}

export default Footer;