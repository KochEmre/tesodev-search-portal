import React from 'react'
import Button from '../../components/button';
import "./searchResultPage.scss"
import { ReactComponent as TesodevLogo } from '../../assets/largeLogo.svg';
import { useLocation } from 'react-router-dom';


const SearchResultPage = ({value}) => {
     //const options = searchData.map((data => { return data['Name Surname']}));
     const onChange = (value) => { //search input değerini alıyor.
        //setSearchValue(value);
      };
      const { state } = useLocation();
      console.log(state);

  return (
    <div className="header-container">
        <TesodevLogo style={{width: "149px", height:"63px"}}/>

        <input 
            autoComplete="off"
            type="text"
            value={state}
            placeholder={"Search"}
            onChange={(e) => onChange(e.target.value)}
        />
        <Button style={{width: "138px"}}>Search</Button>
        <Button style={{width:"146px"}}>Add new record</Button>

    </div>
  )
}

export default SearchResultPage