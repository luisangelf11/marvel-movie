import React, {useEffect, useState} from "react";
import "./Slider.css";
import dataSlider from "../helpers/dataSlider";
import BtnSlider from "./BtnSlider";

export default function Slider(){
    const [slideIndex, setSlideIndex] = useState(1);

    useEffect(()=>{
        setTimeout(()=>{
            if(slideIndex !== dataSlider.length){
                setSlideIndex(slideIndex + 1);
            } 
            else if (slideIndex === dataSlider.length){
                setSlideIndex(1);
            }
        }, 10000);
    }, [slideIndex]);

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

   return(
       <>
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                    <img src={obj.url} alt={obj.title}/>
                    </div>
                )
            })}

            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 3}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
       </>
   );
}