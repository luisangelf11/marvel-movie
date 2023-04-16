import React from 'react';
import CardComponent from './CardComponent';

export default function TableContent({data}){
    let style={
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr)",
        gridGap: "1rem",
        width: "auto",
        height: "auto",
        marginTop: "30px",
        padding: "10px"
    };
    return(
        <section style ={style}>
            {
                data.length > 0
                ?data.map((el)=> <CardComponent key={el.id} title={el.title} imgURL={(el.images.length === 0)
                    ?el.imgURL = "https://previews.123rf.com/images/freshwater/freshwater1711/freshwater171100021/89104479-p%C3%ADxel-404-p%C3%A1gina-de-error-p%C3%A1gina-no-encontrada.jpg"
                    : `${el.images[0].path}.${el.images[0].extension}`}/>)
                :<h2>No data</h2>
            }
        </section>
    );
}