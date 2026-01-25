import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

function Profile() {
    const {user, isAuthenticated, logout}=useAuth0();
    
     if(!isAuthenticated)
        return null;
     
  return (
    <div>
      <img
      src={user.picture}
      alt="Logout"
      title='Click to logout'
      style={{width:"40px", height:"40px", borderRadius:"50%",cursor:"pointer"}}
      onClick={()=>logout({logoutParams:{returnTo:window.location.origin}})}
      />
    
    </div>
  )
}

export default Profile
