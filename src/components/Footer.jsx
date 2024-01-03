import React from 'react';
import '../styles/Footer.css';

import logo from '../assets/img/logos/gy-logo.webp'

import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImMail } from "react-icons/im";

export function Footer() {
    const GITHUB_URL            = "https://github.com/GY-CODING";
    const TWITTER_URL           = "https://twitter.com/GYCODING";
    const MAIL_URL              = "mailto:gycoding05@gmail.com";

    const GY_CODING_SIGNATURE   = "@GY CODING 2024";

    return (
        <div className="footer">
            <div className="footerContent">
                <img className="footerLogo" src={logo} alt="gyLogo" />
                <div className="footerMedia">
                    <a href={GITHUB_URL} rel="noreferrer noopener" target="_blank"><FaGithubSquare className="footerMediaLogo github" /></a>
                    <a href={TWITTER_URL} rel="noreferrer noopener" target="_blank"><FaSquareXTwitter className="footerMediaLogo twitter" /></a>
                    <a href={MAIL_URL} rel="noreferrer noopener" target="_blank"><ImMail className="footerMediaLogo mail" /></a>
			    </div>
                <h5 class="footerSignature">{GY_CODING_SIGNATURE}</h5>
            </div>
            
        </div>
    );
}