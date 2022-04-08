import React from 'react'
import AddLinkForm from '../../components/addLinkForm'
import "./addLinkPage.scss"

const AddLinkPage = () => {
  return (
    <div className='link-page-container'>
      <div className="form-container">
        <AddLinkForm/>
      </div>
    </div>
  )
}

export default AddLinkPage