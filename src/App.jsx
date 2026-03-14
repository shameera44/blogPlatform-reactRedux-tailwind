import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import { Routes, Route } from "react-router-dom"
import CreatePost from "./pages/CreatePost"
import PostDetails from "./pages/PostDetails"
import EditPost from "./pages/EditPost";
import { useState } from "react"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ProtectedRoute from "./components/ProtectedRoute"
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <div>
      <Toaster />
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} />} />
        <Route path="/about" element={<About />} />
        <Route path="/createPost" element={<ProtectedRoute><CreatePost /></ProtectedRoute>} />
        <Route path="/edit/:id" element={<ProtectedRoute><EditPost /></ProtectedRoute>} />
        <Route path="/postdetails/:id" element={<PostDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </div>
  )
}

export default App