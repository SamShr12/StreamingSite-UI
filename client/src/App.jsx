import { Routes, Route } from "react-router-dom"
import { Dashboard, Home, Profile, VidDetail } from "./components"

function App() {

  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/user/@sam" element={<Profile />}/>
        <Route path="/video/:name" element={<VidDetail />}/>

        <Route path="/user/channel/create" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
