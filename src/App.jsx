import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import { Routes, Route } from "react-router-dom"
import CreatePost from "./pages/CreatePost"
import PostDetails from "./pages/PostDetails"
import EditPost from "./pages/EditPost";

const App = () => {

  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/createPost" element={<CreatePost/>} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/postdetails/:id" element={<PostDetails />} />
      </Routes>

    </div>
  )
}

export default App