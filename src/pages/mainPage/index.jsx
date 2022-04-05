import React from 'react'
import Card from '../../components/card'
import HorizontalSlider from '../../components/horizontalSlider'
import News from '../../components/news'
import Search from '../../components/search'
import data from "../../data/news-mockup.json"
import "./mainPage.scss"
import { ReactComponent as TesodevLogo } from '../../assets/largeLogo.svg';
import Button from '../../components/button'

const Main = () => {
  return (
    <div className='main-container'>
      <div className="button-container">
        <Button style={{width:"197px"}}>Add new record</Button>
      </div>
      <div className="logo-container">
        <TesodevLogo className='logo'/>
        <span className='logo-text'>Search app</span>
      </div>
      <Search/>
      <News/>
    </div>
  )
}

export default Main