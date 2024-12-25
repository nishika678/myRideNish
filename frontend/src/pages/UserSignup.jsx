import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'

const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState({})

  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    if (response.status === 201) {
      const data = response.data
      setUserData(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }

    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-8">
      <div className="bg-white p-8 w-full max-w-lg rounded-xl shadow-lg">
        <div className="text-center mb-6">
          <img
            className="w-20 mx-auto mb-4"
            src="/assets/RaahiLogo.png"
            alt="Logo"
          />
          <h2 className="text-3xl font-semibold text-gray-800">Create Your Account</h2>
        </div>

        <form onSubmit={submitHandler} className="space-y-6">

          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">What's your name?</h3>
            <div className="flex gap-4">
              <input
                required
                type="text"
                className="bg-gray-100 rounded-lg border border-gray-300 w-1/2 px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                required
                type="text"
                className="bg-gray-100 rounded-lg border border-gray-300 w-1/2 px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">What's your email?</h3>
            <input
              required
              type="email"
              className="bg-gray-100 rounded-lg border border-gray-300 w-full px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">Enter Password</h3>
            <input
              required
              type="password"
              className="bg-gray-100 rounded-lg border border-gray-300 w-full px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold w-full py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
            >
              Create Account
            </button>
          </div>

        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 font-semibold hover:text-blue-700">
              Login here
            </Link>
          </p>
        </div>

        <div className="text-center mt-4 text-sm text-gray-500">
          <p>
            This site is protected by reCAPTCHA and the{' '}
            <span className="underline text-blue-600">Google Privacy Policy</span> and{' '}
            <span className="underline text-blue-600">Terms of Service apply</span>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserSignup
