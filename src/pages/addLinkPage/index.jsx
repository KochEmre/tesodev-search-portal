import React from 'react'
import AddLinkForm from '../../components/addLinkForm'
import { ReactComponent as TesodevLogo } from '../../assets/largeLogo.svg';
import "./addLinkPage.scss"
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const AddLinkPage = () => {
  const navigate = useNavigate();

  const goToBack = () => {
    navigate(-1)
  }

  return (
    <div className='link-page-container'>
      <div className="header-container">
        <TesodevLogo style={{ width: "149px", height: "63px", minWidth: "149px", minHeight: "63px" }} />
        <div className="return" onClick={goToBack}>
          <BiArrowBack className='back-icon' size={36}  />      
          <h1 className='header-text' style={{color: "#484848"}}> Return to List Page</h1>
        </div>
      </div>

      <div className="form-container">
        <AddLinkForm />
      </div>
    </div>
  )
}

export default AddLinkPage