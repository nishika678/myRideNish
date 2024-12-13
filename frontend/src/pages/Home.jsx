// import React from 'react'  ## No longer required in React 17

import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="bg-cover bg-center bg-[url(/assets/RaahiHome.png)] h-screen pt-8 w-full flex justify-between flex-col  bg-red-400">
      <img className="w-16 ml-8" src="/assets/RaahiLogo.png" alt="" />
      <div className="bg-white pb-7 py-4 px-4">
        <h2 className="text-3xl font-bold">Get Started with Raahi</h2>
        <Link to='/login' className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5">Continue</Link>
      </div>

    </div>
  )
}

export default Home