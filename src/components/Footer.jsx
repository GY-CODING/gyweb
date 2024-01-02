import React from 'react';
import '../styles/Footer.css';

import logo from '../assets/img/logos/gy-logo.webp'
import github from '../assets/img/media-logos/github-logo.svg';
import twitter from '../assets/img/media-logos/twitter-logo.svg';
import mail from '../assets/img/media-logos/mail-logo.svg';

export function Footer() {
    const GITHUB_URL            = "https://github.com/GY-CODING";
    const TWITTER_URL           = "https://twitter.com/GYCODING";
    const MAIL_URL              = "mailto:gycoding05@gmail.com";

    const GY_CODING_SIGNATURE   = "@GY CODING 2024";

    return (
        <div className="footer">
            <img class="footerLogo" src={logo} alt="gyLogo" />
            <div className="footerMedia">
				<a href={GITHUB_URL} rel="noreferrer noopener" target="_blank"><img src={github} alt="github" className="footerMediaLogo github" draggable="false"/></a>
				<a href={TWITTER_URL} rel="noreferrer noopener" target="_blank"><img src={twitter} alt="twitter" className="footerMediaLogo twitter" draggable="false"/></a>
				<a href={MAIL_URL} rel="noreferrer noopener" target="_blank"><img src={mail} alt="mail" className="footerMediaLogo mail" draggable="false"/></a>
			</div>
            <h5 class="footerSignature">{GY_CODING_SIGNATURE}</h5>
        </div>
    );
}
