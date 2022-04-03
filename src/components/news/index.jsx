import React from 'react'
import newsMockupData from "../../data/news-mockup.json"
import Card from "../card"
import HorizontalSlider from '../horizontalSlider'

const News = () => {

    return (

        <div id="body">
            <HorizontalSlider cardData={newsMockupData} />
        </div>

    )
}

export default News