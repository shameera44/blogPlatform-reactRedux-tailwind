
import { Link } from "react-router-dom"
import logo from "../images/logo.png"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../features/auth/authSlice"

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const user = useSelector(state => state.auth.loggedinUser)
const dispatch = useDispatch()
  
  return (
    <div className="flex justify-between items-center bg-blue-900 text-white font-bold px-10 py-4 fixed top-0 left-0 w-full z-50 shadow-md">

      <div > <img src={logo} alt="logo" className="w-32 h-12" /></div>

      <div className="text-4xl">Blog<span className="text-yellow-300">Sphere</span></div>

      <div>
        <input
          type="text"
          placeholder="Search blogs..."
          className="w-full p-2  rounded bg-white text-black"
          value={searchTerm}
          onInput={(e) => setSearchTerm(e.target.value)} />
      </div>

      <div className=" hidden lg:flex gap-5 text-xl  ">
        <Link to="/" className="  cursor-pointer hover:text-orange-400 hover:underline">Home</Link>
        <Link to="/about" className=" cursor-pointer  hover:text-orange-400 hover:underline" >About</Link>
        <Link to="/createPost" className=" cursor-pointer hover:text-orange-400  hover:underline">CreatePost</Link>


{user ? (
  <button
    onClick={() => dispatch(logout())}
    className=" text-red-400 hover:text-yellow-400"
  >
    Logout
  </button>
) : (
  <Link to="/login" className="hover:text-yellow-400">
    Login
  </Link>
)}
      </div>


    </div>
  )
}

export default Navbar