import Main from "./routes/mainPage"
import NotFoundPage from "./routes/notFoundPage"

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