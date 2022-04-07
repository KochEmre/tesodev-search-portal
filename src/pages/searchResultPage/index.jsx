import React, { useEffect, useState } from 'react'
import Button from '../../components/button';
import "./searchResultPage.scss"
import { ReactComponent as TesodevLogo } from '../../assets/largeLogo.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchCardTable from '../../components/searchCardTable';
import DropdownButton from '../../components/dropdownButton';


const SearchResultPage = () => {
  const { state } = useLocation();
  const { searchValue, searchData } = state;

  const [newSearchValue, setNewSearchValue] = useState(searchValue);
  const [searchResult, setSearchResult] = useState([]);

  const navigate = useNavigate();
  const goToAddLinkPage = () => {
    navigate('/add-link');
  };

  useEffect(() => {
    setSearchResult(() => {
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
    setSearchResult(() => {
      const search = searchData?.filter((option) => (
        option["Name Surname"].trim().toLowerCase().includes(newSearchValue.trim().toLowerCase())
      ))
      return search;
    })
  };

  function GetSortOrderNameAsc(prop) {
    return function (a, b) {
      if (a[prop].toLowerCase() > b[prop].toLowerCase()) {
        return 1;
      } else if (a[prop].toLowerCase() < b[prop].toLowerCase()) {
        return -1;
      }
      return 0;
    }
  }

  function GetSortOrderNameDes(prop) {
    return function (a, b) {
      if (a[prop].toLowerCase() > b[prop].toLowerCase()) {
        return -1;
      } else if (a[prop].toLowerCase() < b[prop].toLowerCase()) {
        return 1;
      }
      return 0;
    }
  }

  function convertDateFormat(date) {
    let dateComponents = date.split('/');
    return(new Date(dateComponents[2], (dateComponents[1] - 1), dateComponents[0]))
  }

  function GetSortOrderDateAsc(prop) {
    return function (a, b) {
      if (convertDateFormat(a[prop]).getTime() > convertDateFormat(b[prop]).getTime()) {
        return 1;
      } else if (convertDateFormat(a[prop]).getTime() < convertDateFormat(b[prop]).getTime()) {
        return -1;
      }
      return 0;
    }
  }
  function GetSortOrderDateDes(prop) {
    return function (a, b) {
      if (convertDateFormat(a[prop]).getTime() > convertDateFormat(b[prop]).getTime()) {
        return -1;
      } else if (convertDateFormat(a[prop]).getTime() < convertDateFormat(b[prop]).getTime()) {
        return 1;
      }
      return 0;
    }
  }

  const options = ["Name ascending", "Name descending", "Year ascending", "Year descending"];

  const onOrderByClick = (value) => { //search input yeni değerini alıyor.
    let temp = [];
    temp = temp.concat(searchResult);
    switch (value) {
      case options[0]:
        temp.sort(GetSortOrderNameAsc("Name Surname"));
        break;
      case options[1]:
        temp.sort(GetSortOrderNameDes("Name Surname"));
        break;
      case options[2]:
        temp.sort(GetSortOrderDateAsc("Date"));
        break;
      case options[3]:
        temp.sort(GetSortOrderDateDes("Date"));
        break;

      default:
        break;
    }
    setSearchResult(temp);
  };

  return (
    <div className='result-page-container'>
      <div className="header-container">
        <TesodevLogo style={{ width: "149px", height: "63px", minWidth: "149px", minHeight: "63px" }} />
        <div className="searchbar-container">
          <input
            autoComplete="off"
            type="text"
            value={newSearchValue}
            placeholder={"Search"}
            onChange={(e) => onChange(e.target.value)}
          />
          <Button style={{ width: "138px" }} onClick={onSearchClick}>Search</Button>
        </div>
        <Button style={{ width: "216px", minWidth: "170px" }} onClick={goToAddLinkPage}>Add new record</Button>
      </div>
      <div className='card-table-container'>
        <div className="card-table-wrapper">
          <SearchCardTable searchResult={searchResult} />
        </div>
        <div className="dropdown-button-wrapper">
          <DropdownButton className="dropdown-button" buttonName={"Order By"} options={options} setSelectedFilter={onOrderByClick} />
        </div>
      </div>
    </div>
  )
}

export default SearchResultPage