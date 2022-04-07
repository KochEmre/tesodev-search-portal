import React from 'react'
import News from '../../components/news'
import Search from '../../components/search'
import "./mainPage.scss"
import { ReactComponent as TesodevLogo } from '../../assets/largeLogo.svg';
import Button from '../../components/button'
import MainPageFooter from '../../components/mainPageFooter';

const Main = () => {
  return (
    <div className='main-container'>
      <div className="button-container">
        <Button style={{width:"197px"}}>Add new record</Button>
      </div>
      <div className="logo-container">
        <TesodevLogo/>
        <span className='logo-text'>Search app</span>
      </div>
      <Search/>
      <News/>
      <MainPageFooter/>
    </div>
  )
}

export default Main