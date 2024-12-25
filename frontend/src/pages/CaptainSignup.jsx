import  { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'

const CaptainSignup = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')

  // const { captain, setCaptain } = React.useContext(CaptainDataContext)

  const submitHandler = async (e) => {
    e.preventDefault()
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

    if (response.status === 201) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }

    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center py-8">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg">
        <div className="text-center mb-8">
          <img
            className="w-20 mx-auto mb-4"
            src="/assets/RaahiLogoIMG.png"
            alt="Raahi Driver Icon"
          />
          <h2 className="text-3xl font-semibold text-gray-800">Create Captain Account</h2>
        </div>

        <form onSubmit={submitHandler} className="space-y-6">
          {/* Name Fields */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">What's your Captain's name?</h3>
            <div className="flex gap-4">
              <input
                required
                className="bg-gray-100 rounded-lg border border-gray-300 w-1/2 px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                required
                className="bg-gray-100 rounded-lg border border-gray-300 w-1/2 px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">What's your Captain's email?</h3>
            <input
              required
              type="email"
              className="bg-gray-100 rounded-lg border border-gray-300 w-full px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Field */}
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

          {/* Vehicle Information Fields */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">Vehicle Information</h3>
            <div className="flex gap-4 mb-6">
              <input
                required
                type="text"
                className="bg-gray-100 rounded-lg border border-gray-300 w-1/2 px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Vehicle Color"
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
              />
              <input
                required
                type="text"
                className="bg-gray-100 rounded-lg border border-gray-300 w-1/2 px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Vehicle Plate"
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
              />
            </div>
            <div className="flex gap-4 mb-6">
              <input
                required
                type="number"
                className="bg-gray-100 rounded-lg border border-gray-300 w-1/2 px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Vehicle Capacity"
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
              />
              <select
                required
                className="bg-gray-100 rounded-lg border border-gray-300 w-1/2 px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
              >
                <option value="" disabled>Select Vehicle Type</option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="moto">Moto</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold w-full py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
            >
              Create Captain Account
            </button>
          </div>
        </form>

        {/* Login Link */}
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/captain-login" className="text-blue-600 font-semibold hover:text-blue-700">
              Login here
            </Link>
          </p>
        </div>

        {/* Privacy and Terms */}
        <div className="text-center mt-6 text-sm text-gray-500">
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

export default CaptainSignup
