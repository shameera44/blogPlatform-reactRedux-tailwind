import { useDispatch } from "react-redux"
import { register } from "../features/auth/authSlice"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import toast from "react-hot-toast"

const Register = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(register({ name, email, password }))
    toast.success("you Registered")
    navigate("/login")
  }

  return (<div className="flex justify-center mt-40">
    <form onSubmit={handleSubmit} className=" flex flex-col gap-5  items-center pt-20   w-80 p-5 shadow-2xl mt-10 ">

      <input className="border border-gray-400 p-2 rounded"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input className="border border-gray-400 p-2 rounded"
        type="email"
        placeholder="Email"
        value={email}
        onInput={(e) => setEmail(e.target.value)}
      />

      <input className="border border-gray-400 p-2 rounded"
        type="password"
        placeholder="Password"
        value={password}
        onInput={(e) => setPassword(e.target.value)}
      />

      <button type="submit" className="bg-blue-600 text-white p-2 rounded cursor-pointer">Register</button>

    </form>
  </div>
  )
}

export default Register