import { Link } from "react-router-dom"
import logo from "../images/logo.png"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../features/auth/authSlice"
import menuIcon from "../images/menu.svg"
import { useState, useEffect } from "react"

const Navbar = ({ searchTerm, setSearchTerm }) => {

  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const user = useSelector(state => state.auth.loggedinUser)
  const dispatch = useDispatch()

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
      setDarkMode(true)
    }
  }, [])

  // Toggle theme
  const toggleDarkMode = () => {
    console.log("clicked")
    document.documentElement.classList.toggle("dark")

    const isDark = document.documentElement.classList.contains("dark")
    localStorage.setItem("theme", isDark ? "dark" : "light")
    setDarkMode(isDark)
  }

  return (
    <div className="flex justify-between items-center bg-gray-600 dark:bg-gray-900 text-white px-10 py-4 fixed top-0 left-0 w-full z-50 shadow-md">

      {/* Logo */}
      <img src={logo} alt="logo" className="w-32 h-12" />

      {/* Title */}
      <div className="text-3xl font-bold">
        Blog<span className="text-yellow-300">Sphere</span>
      </div>

      {/* Search */}
      <div className="hidden md:block">
        <input
          type="text"
          placeholder="Search blogs..."
          className="p-2 rounded bg-white text-black dark:bg-gray-800 dark:text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-5 items-center text-lg">

        <Link to="/" className="hover:text-orange-400">Home</Link>
        <Link to="/about" className="hover:text-orange-400">About</Link>
        <Link to="/createPost" className="hover:text-orange-400">CreatePost</Link>

        {/* Dark Mode Button */}
        <button
          onClick={toggleDarkMode}
          className="px-3 py-1 bg-white dark:bg-gray-800 text-black dark:text-white text-xl rounded-full"
        >
          {darkMode ? "Light" : "Dark"}
        </button>

        {user ? (
          <button
            onClick={() => dispatch(logout())}
            className="bg-red-600 px-4 py-1 rounded hover:bg-red-700"
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="bg-blue-600 px-4 py-1 rounded hover:bg-blue-700">
            Login
          </Link>
        )}

      </div>

      {/* Mobile Menu Icon */}
      <img
        src={menuIcon}
        alt="menu"
        className="w-8 h-8 cursor-pointer lg:hidden invert dark:invert-0"
        onClick={() => setMenuOpen(!menuOpen)}
      />

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 right-0 p-5 bg-gray-700 dark:bg-gray-800 flex flex-col items-center gap-4 lg:hidden text-lg">

          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/createPost" onClick={() => setMenuOpen(false)}>CreatePost</Link>

          {/* Dark Mode Button (Mobile) */}
          <button
            onClick={toggleDarkMode}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-900 text-black dark:text-white rounded"
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>

          {user ? (
            <button
              onClick={() => {
                dispatch(logout()
                )
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