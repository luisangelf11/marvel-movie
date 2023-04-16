import React from 'react';
import foto from '../assets/404.jpg';

export default function ErrorPage(){
    return(
        <>
            <img src={foto} style={{marginTop:"3rem", height: "auto", objectFit: "cover"}} alt="Error de pagina"/>
        </>
    );
}