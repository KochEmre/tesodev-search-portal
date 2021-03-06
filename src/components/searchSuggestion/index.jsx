import { useRef, useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import Button from '../button';
import SearchFieldItem from '../searchFieldItem';

import './searchSuggestion.scss';

const SearchSuggestion = ({
    name,
    value,
    onChange,
    onClickShowMore,
    options,
    style = {},
    id = "",
    placeholder = "",
}) => {
    const dropdownRef = useRef();
    const [showOptions, setShowOptions] = useState(false);
    const [suggestingOptions, setSuggestingOptions] = useState([]);

    useEffect(() => {
      setSuggestingOptions(() => {
        const suggestions = options?.filter((option) => (
            option["Name Surname"].trim().toLowerCase().includes(value.trim().toLowerCase())
        ))
        return suggestions;
      })
    }, [options, value]);

    useEffect(() => {
      document.addEventListener("mousedown", (e) => {
          if (showOptions && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
              setShowOptions(false);
          }
      })
    }, [showOptions]);

    return (
        <div className="dropdown-container" style={style} id={id} ref={dropdownRef}>
            <div className='search-input-container'>
                <input 
                    autoComplete="off"
                    type="text"
                    name={name} 
                    value={value}
                    placeholder={placeholder}
                    onChange={(e) => onChange(e.target.value)}
                    onFocus={() => setShowOptions(true)}
                />
                <BiSearch size={28} className='search-icon'/>
                <Button style={{width: "15%"}} onClick={() => onClickShowMore()}>Search</Button>

            </div>
            
            {showOptions && suggestingOptions.length > 0 && value.trim().length > 1 &&(
                <div className="options">
                    {suggestingOptions?.map((child, index) => (
                        index <3 &&(
                        <div key={index} className="option" onClick={() => [setShowOptions(false)]}>
                            <SearchFieldItem fullname={child["Name Surname"]} city={child["City"]} country={child["Country"]}/>
                        </div>
                        )
                    ))}
                    <h1 onClick={() => onClickShowMore()}>Show more...</h1>
                </div>
            )}
        </div>
    )
}

export default SearchSuggestion;