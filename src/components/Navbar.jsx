
import { Link } from "react-router-dom"
import logo from "../images/logo.png"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../features/auth/authSlice"
import menuIcon from "../images/menu.svg"
import { useState } from "react"

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const user = useSelector(state => state.auth.loggedinUser)
const dispatch = useDispatch()
  const [menuOpen, setMenuOpen] = useState(false)
 
  return (
    <div className="flex justify-between items-center bg-gray-600 text-white font-bold px-10 py-4 fixed top-0 left-0 w-full z-50 shadow-md">

      <div > <img src={logo} alt="logo" className="w-32 h-12" /></div>

      <div className="text-4xl">Blog<span className="text-yellow-300">Sphere</span></div>

{/* search input */}
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
    className=" text-yellow-200 hover:text-blue-400 bg-red-600 px-5 py-2 rounded-full"> Logout</button>
) : (
  <Link to="/login" className=" bg-blue-600 text-white hover:text-red-500 px-5 py-2 rounded-full">Login</Link>
)}
      </div>


 {/* Menu Icon (Mobile) */}
        <img
          src={ menuIcon}
          alt="menu"
          className="w-8 h-8 cursor-pointer lg:hidden invert"
          onClick={() => setMenuOpen(!menuOpen)}
        />


      {/* Mobile Menu */}
      {menuOpen && (
  <div className="absolute top-20 right-0 p-5 bg-gray-700 flex flex-col items-center gap-4  lg:hidden text-lg">

    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
    <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
    <Link to="/createPost" onClick={() => setMenuOpen(false)}>CreatePost</Link>

    {user ? (
      <button
        onClick={() => {
          dispatch(logout())
          setMenuOpen(false)
        }}
      >
        Logout
      </button>
    ) : (
      <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
    )}

  </div>
)}



 
</div>
  )
}

export default Navbar