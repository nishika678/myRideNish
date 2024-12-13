// import React from 'react'

const UserLogin = () => {
  return (
    <div className="p-7">
      <form action="">
        <h3 className="text-xl mb-2">"What's your email?"</h3>
        <input 
        type="email" 
        required 
        className="bg-[#eeeeee] mb-7  rounded px-4 py-2 border w-full text-lg placeholder:text-base"
        placeholder="email@example.com"
        />
        <h3 className="text-xl mb-2">And your password?</h3>
        <input 
        type="password"
        className="bg-[#eeeeee] mb-7  rounded px-4 py-2 border w-full text-lg placeholder:text-base"
        required 
        placeholder="password" 
        />
        <button>Login</button>
      </form>
    </div>
  )
}

export default UserLogin