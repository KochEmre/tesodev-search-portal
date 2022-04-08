import React, {useState} from 'react'
import SearchSuggestion from "../searchSuggestion/index"
import { useNavigate } from 'react-router-dom';


import "./search.scss"

const Search = () => {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    // Retrieve the object from storage
    var receivedStorageData = localStorage.getItem('searchData');
    const searchData = JSON.parse(receivedStorageData);

    //const options = searchData.map((data => { return data['Name Surname']}));
    const onChange = (value) => { //search input değerini alıyor.
        setSearchValue(value);
      };

    const showMoreClick = () => { //search input değerini alıyor.
        navigate("/search-result",{ 
            state: 
            {
                searchValue: searchValue, 
                searchData: searchData
            } 
        })
      };

  return (
    <div className='search-container'>
        <h1 className='header'>Find in records</h1>
          <SearchSuggestion
            id='search'
            name='search'
            placeholder='Search'
            value={searchValue}
            onChange={onChange}
            options={searchData}
            onClickShowMore={showMoreClick}
            />
    </div>
  )
}

export default Search