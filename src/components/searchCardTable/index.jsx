import React from 'react'
import SearchFieldItem from '../searchFieldItem'
import "./searchCardTable.scss"

const SearchCardTable = ({
    searchResult,

}) => {
  return (
    <div className="table-container">
        {searchResult.length > 0  &&(
                <div className="table">
                    {searchResult?.map((child, index) => (
                        index <5 &&(
                        <div key={index}>
                            <div className="search-item">
                                <SearchFieldItem className="itemasd" fullname={child["Name Surname"]} city={child["City"]} country={child["Country"]} company={child["Company"]} date={child["Date"]}/>
                            </div>
                            {index <4 &&(
                                <hr class="divider"></hr>
                            )}                        
                        </div>
                        )
                    ))}
                </div>
        )}

        {searchResult.length <=0 &&(
            <h2>Couldn't found any data</h2>
        )}
    </div>
  )
}

export default SearchCardTable