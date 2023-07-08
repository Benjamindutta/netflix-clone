import React from 'react'
import './profile.css'
import Nav from '../components/HomeScreen/Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/counter/userSlice'
import { signOut } from "firebase/auth";
import { auth } from "../firebase"
const Profile = () => {
    const user = useSelector(selectUser)
    const signout = () => {
        signOut(auth).then(() =>
            console.log("signed out")
        ).catch((error) => {
            alert(error.message);
        })
    }
    return (
        <div className='profileScreen'>
            <Nav />
            <div className='profileScreen_body'>
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' />
                    <div className='profileScreen_details'>
                        <h2>{user.email}</h2>
                        <div className="profileScreenPlans">
                            <h3>Plans</h3>
                            <button onClick={signout} className='ProfileScreenSignout'>Signout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
