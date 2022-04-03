import React from 'react'
import newsMockupData from "../../data/news-mockup.json"
import Card from "../card"
import HorizontalSlider from '../horizontalSlider'

const News = () => {

    return (

        <div id="slider-container">
            <h1>Top News</h1>
            <HorizontalSlider cardData={newsMockupData} />
        </div>

    )
}

export default News