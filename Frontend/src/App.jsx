import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, googleProvide } from '../utils/firbase'

const App = () => {

  const googleLogin= async () => {
    const data= await signInWithPopup(auth,googleProvide);
    console.log(data)
  }
  return (
    <div
      className=' flex justify-center items-center h-screen w-full'
    >
      <h1 class="text-3xl font-bold underline">
        <button
          className=' rounded-2xl px-3 py-2 bg-blue-400 cursor-pointer' 
          onClick={googleLogin}
        >
          Continue with Google
        </button>
      </h1>
    </div>
  )
}

export default App