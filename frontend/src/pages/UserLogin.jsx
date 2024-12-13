
import { useState } from "react"
import { Link } from "react-router-dom"

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    setUserData({email: email, password: password})
    setEmail('')
    setPassword('')
  }

  return (
    <div className="h-screen bg-gradient-to-b from-[#f7f7f7] to-[#ffffff] flex justify-center items-center px-4 py-8">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <div className="flex justify-center mb-8">
          <img className="w-24" src="/assets/RaahiLogo.png" alt="Raahi Logo" />
        </div>

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">What's your email?</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg"
              placeholder="email@example.com"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-lg font-medium text-gray-700 mb-2">And your password?</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg"
              placeholder="password"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-3 rounded-lg mb-4 hover:bg-gray-800 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Sign up link */}
        <p className="text-center">
          Do not have an account? <Link to="/Signup" className="text-blue-600 hover:underline">Sign up!</Link>
        </p>

        {/* Captain Login Button */}
        <div className="mt-6">
          <Link
            to="/captain-login"
            className="w-full bg-[#10b461] flex items-center justify-center text-white font-semibold py-3 rounded-lg  hover:bg-[#0c9b50] transition duration-300"
          >
            Sign in as Captain
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserLogin
