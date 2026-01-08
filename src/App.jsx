import Header from "./components/Header"
import NewsPage from "./components/NewsPage"

import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/:category?" element={<NewsPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
