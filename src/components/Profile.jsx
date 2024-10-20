import {React,useContext} from 'react'
import { AuthContext } from '../context/AuthContext'

const Profile = () => {
    const {user}=useContext(AuthContext)
  return (
    <div>
        Profile{
            user?(
                <div>
                    <p>{user.fname}</p>
                    <p>{user.email}</p>
                </div>
            ):<p>Please login to view your profile!</p>
        }
    </div>
  )
}
export default Profile