import React from 'react';
import "./horizontalSlider.scss"
//import "./horizontalSlider.css"
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Card from '../card';

const HorizontalSlider = ({cardData}) => {
    const slideLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return (
        <div id="main-slider-container">
            <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft} />
            <div id="slider">
                {
                    cardData.map((data) => {
                        return (
                            <Card key={data.id} newsData={data} />
                        )
                    })
                }
            </div>
            <MdChevronRight size={40} className="slider-icon right" onClick={slideRight} />
        </div>
    )
}
export default HorizontalSlider