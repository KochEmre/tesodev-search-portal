import Main from "./pages/mainPage"
import NotFoundPage from "./pages/notFoundPage"
import {Routes, Route} from "react-router-dom"
import searchData from "./data/search-mock-data.json"
import SearchResultPage from "./pages/searchResultPage"

const App = () => {
  
  if(localStorage.getItem("searchData") === null){
    localStorage.setItem("searchData", JSON.stringify(searchData))
  }
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/search-result" element={<SearchResultPage/>}/>
      <Route path="*" element={<NotFoundPage />}/>
    </Routes>
  );
}

export default App