import React, {useState} from 'react'
import DataSuggestion from "../dataSuggestion/index"

import "./search.scss"

const Search = () => {
    const [searchValue, setSearchValue] = useState("");
    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem('searchData');
    const searchData = JSON.parse(retrievedObject);

    //const options = searchData.map((data => { return data['Name Surname']}));
    const onChange = (value) => { //search input değerini alıyor.
        setSearchValue(value);
      };

      const showMore = (value) => { //search input değerini alıyor.
        setSearchValue(value);
        debugger;
      };

  return (
    <div className='search-container'>
        <h1 className='header'>Find in records</h1>
          <DataSuggestion
            id='search'
            name='search'
            value={searchValue}
            onChange={onChange}
            options={searchData}
            onClickShowMore={(value) => showMore(value)}
            />
    </div>
  )
}

export default Search