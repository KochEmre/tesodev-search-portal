import React, { useEffect, useMemo, useState } from 'react'
import Pagination from '../pagination';
import SearchFieldItem from '../searchFieldItem'
import "./searchCardTable.scss"

const SearchCardTable = ({
    searchResult,
}) => {
    let PageSize = 5;
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=>{
        setCurrentPage(1);
    },[searchResult]);


    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return searchResult.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, searchResult, PageSize]);

    return (
        <div className="table-container">
            {searchResult.length > 0 && (
                <React.Fragment>
                    <div className="table">
                        {currentTableData?.map((child, index) => (
                            index < 5 && (
                                <div key={index}>
                                    <div className="search-item">
                                        <SearchFieldItem fullname={child["Name Surname"]} city={child["City"]} country={child["Country"]} company={child["Company"]} date={child["Date"]} />
                                    </div>
                                    {index < 4 && (
                                        <hr className="divider"></hr>
                                    )}
                                </div>
                            )
                        ))}

                    </div>
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={searchResult.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </React.Fragment>
            )}

            {searchResult.length <= 0 && (
                <h2>Couldn't found any data</h2>
            )}


        </div>
    )
}

export default SearchCardTable