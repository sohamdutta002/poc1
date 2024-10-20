import React,{useContext} from 'react'
import { AuthContext } from '../context/AuthContext'

export default function Home() {
    const {user,login,logout}=useContext(AuthContext)
    const handleLogin=()=>{
        login({fname:'Soham',email:'soham@mail.com'})
    }
  return (
    <div>
        Home
        {
            user?(
                <div>
                    <p>Welcome,{user.fname}</p>
                    <button onClick={logout} className='bg-red-600 p-2 text-xl font-semibold ml-4 hover:bg-red-800'>Logout</button>
                </div>
            ):<button onClick={handleLogin} className='bg-green-500 p-2 text-xl font-semibold ml-4 hover:bg-green-700'>Login</button>
        }
    </div>
  )
}
