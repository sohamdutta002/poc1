import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {login,logout} from '../redux/actions/authActions'

const HomeReducer = () => {
    const user=useSelector((state)=>state.user)
    const dispatch=useDispatch()

  return (
    <div>
        <h1 className='text-3xl'>HomeReducer</h1>
        {user?(
            <div>
                <p>Hello, {user.firstName} {user.lastName}</p>
                <p>Your email:{user.email}</p>
                <button onClick={()=>dispatch(logout())}>Logout</button>
            </div>
        ):<p>Please fill out the form. No user data available</p>}
    </div>
  )
}

export default HomeReducer