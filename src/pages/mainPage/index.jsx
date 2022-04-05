import React from 'react'
import Card from '../../components/card'
import HorizontalSlider from '../../components/horizontalSlider'
import News from '../../components/news'
import Search from '../../components/search'
import data from "../../data/news-mockup.json"
import "./mainPage.scss"

const Main = () => {
  return (
    <div className='main-container'>
      <Search/>
      <News/>
    </div>
  )
}

export default Main