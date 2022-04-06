import React from 'react'
import "./searchFieldItem.scss"
import { IoLocationOutline } from 'react-icons/io5';


const SearchFieldItem = ({ fullname, city, country, company, date }) => {

  return (
    <div className='item-container'>
        <IoLocationOutline size={24}/>
        <div className='text-container'>
            <p className="item-title">{fullname}</p>
            <p className="item-description">{city}, {country}</p>
        </div>     
    </div>
  )
}

export default SearchFieldItem