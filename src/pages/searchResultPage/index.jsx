import React, { useEffect, useState } from 'react'
import Button from '../../components/button';
import "./searchResultPage.scss"
import { ReactComponent as TesodevLogo } from '../../assets/largeLogo.svg';
import { useLocation } from 'react-router-dom';
import SearchCardTable from '../../components/searchCardTable';


const SearchResultPage = () => {
     const { state } = useLocation();
     const {searchValue, searchData} = state;

     const [newSearchValue, setNewSearchValue] = useState(searchValue);
     const [searchResult, setsearchResult] = useState([]);

     useEffect(() => {
        setsearchResult(() => {
          const search = searchData?.filter((option) => (
              option["Name Surname"].trim().toLowerCase().includes(searchValue.trim().toLowerCase())
          ))
          return search;
        })
      }, [searchData, searchValue]);

     const onChange = (value) => { //search input yeni değerini alıyor.
        setNewSearchValue(value);
      };
     
      const onSearchClick = () => {
        setsearchResult(() => {
            const search = searchData?.filter((option) => (
                option["Name Surname"].trim().toLowerCase().includes(newSearchValue.trim().toLowerCase())
            ))
            return search;
          })
      };

  return (
    <div className='result-page-container'>
        <div className="header-container">   
            <TesodevLogo style={{width: "149px", height:"63px", minWidth: "149px", minHeight:"63px"}}/>
            <div className="searchbar-container">
                <input 
                    autoComplete="off"
                    type="text"
                    value={newSearchValue}
                    placeholder={"Search"}
                    onChange={(e) => onChange(e.target.value)}
                />
                <Button style={{width: "138px"}} onClick={() => onSearchClick()}>Search</Button>
            </div>
            <Button style={{width:"216px", minWidth:"170px"}}>Add new record</Button>
        </div>
        <div className='card-table-container'>
            <SearchCardTable searchResult={searchResult}/>
        </div>
    </div>
  )
}

export default SearchResultPage