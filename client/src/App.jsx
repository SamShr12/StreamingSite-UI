import { Routes, Route } from "react-router-dom"
import { Home, Profile, VidDetail } from "./components"

function App() {

  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/user/@sam" element={<Profile />}/>
        <Route path="/video/:name" element={<VidDetail />}/>
      </Routes>
    </div>
  )
}

export default App
