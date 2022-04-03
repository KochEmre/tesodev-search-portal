import React from 'react'
import newsMockupData from "../../data/news-mockup.json"
import HorizontalSlider from '../horizontalSlider'
import "./news.scss";

const News = () => {

    return (
        <div className="slider-container">
            <h1 className="header">Top News</h1>
            <HorizontalSlider cardData={newsMockupData} />
        </div>
    )
}

export default News