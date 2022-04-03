import Main from "./pages/mainPage"
import NotFoundPage from "./pages/notFoundPage"
import {Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="*" element={<NotFoundPage />}/>
    </Routes>
  );
}

export default App