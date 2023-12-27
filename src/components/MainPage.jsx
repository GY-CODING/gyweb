import React, { useEffect } from 'react';
import '../styles/MainPage.css';
import form from '../assets/img/form.png';

const Parallax = () => {
    const handleMouseMove = (e) => {
        document.querySelectorAll(".parallax").forEach(function (move) {
            var movingValue = move.getAttribute("speed");
            var x = (e.clientX * movingValue) / 250;
            var y = (e.clientY * movingValue) / 250;
            move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
        });
    };

    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
};

export function MainPage() {
    const MSG_WELCOME = `WELCOME TO <br /> <span>GY</span>CODING`
    
    return (
        <div className='mainPage'>
            <Parallax />
            <div className="form-image">
                <img className='form parallax' speed="2" src={form} alt="introForm" draggable="false" />
                <div className="cuadrado1 parallax" speed="1"></div>
                <div className="cuadrado2 parallax" speed="1"></div>
                <div className="cuadrado3 parallax" speed="1"></div>
            </div>
            <h1 className="introduction parallax" speed="0" dangerouslySetInnerHTML={{__html: MSG_WELCOME}} />
        </div>
    );
}
