import { Link } from "react-router-dom"
import logo from "../images/logo.png"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-orange-600 text-white font-bold px-10 py-2">
      <div >
        <img src={logo} alt="logo" className="w-30 h-15" /></div>

      <div className="text-4xl">BlogSphere</div>

      <div className="flex gap-5 text-xl cursor-pointer ">
        <Link to="/" className="hover:text-black hover:underline">Home</Link>
        <Link to="/about" className="hover:text-black hover:underline" >About</Link>
        <Link to="/createPost" className="hover:text-black  hover:underline">CreatePost</Link>

      </div>


    </div>
  )
}

export default Navbar