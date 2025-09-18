import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import AllTeams from './Pages/AllTeams/AllTeams'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/times" element={<AllTeams/>} />
        {/* time by id */}
        {/* noticias */}
        {/* idolos */}
        {/* campeonatos */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
