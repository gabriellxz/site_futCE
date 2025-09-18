import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import AllTeams from './Pages/AllTeams/AllTeams'
import NewsPage from './Pages/NewsPage/NewsPage'
import IdolsPage from './Pages/IdolsPage/IdolsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/times" element={<AllTeams/>} />
        {/* time by id */}
        <Route path={"/notícias"} element={<NewsPage />} />
        <Route path={"/ídolos"} element={<IdolsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
