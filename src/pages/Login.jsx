
import { useDispatch } from "react-redux"
import { login } from "../features/auth/authSlice"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
  e.preventDefault()

  const users = JSON.parse(localStorage.getItem("users")) || []

  const user = users.find(
    (u) => u.email === email && u.password === password
  )

  if(user){
    dispatch(login(user))
    navigate("/")
  }
  else{
    alert("Invalid credentials")
    
  }
}
  return (
    <div className="flex  justify-center mt-50 ">
      <p className=" flex  justify-center text-center">you already have an account?<span className="text-blue-600 font-bold">login </span> otherwise<Link to="/register" className=" text-blue-600  font-bold text-xl text- underline hover:text-orange-400 cursor-pointer">Register</Link> </p>
     
      <form onSubmit={handleSubmit} className="flex flex-col  items-center pt-20  gap-4 w-80 p-5 shadow-2xl mt-10">

        <input
          type="email"
          placeholder="Email"
          value={email}
          onInput={(e)=>setEmail(e.target.value)}
          className="border p-2"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onInput={(e)=>setPassword(e.target.value)}
          className="border p-2"
        />

        <button type="submit" className="bg-blue-600 text-white  font-bold p-5 cursor-pointer rounded">
          Login
        </button>

      </form>
    </div>
  )
}

export default Login

