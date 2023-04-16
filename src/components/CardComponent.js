import React from 'react';

export default function CardComponent({title, imgURL}){
    let style ={
        textDecoration: "none",
        color: "#000",
        margin: "auto",
        width: "250px",
        height: "310px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        display: "grid",
        justifyContent: "center",
        marginTop: "10px",
    };
    return(
        <>
            <div style={style}>
                <div>
                    <img style={{width:"200px", height:"200px", padding: "10px", borderRadius: "30px"}} src={imgURL} alt={title}/>
                    <p style={{padding: "5px", fontWeight: "bold", fontSize: "15px"}}>{title}</p>
                </div>
            </div>
        </>
    );
}