import React from 'react'
import {logOut} from "../../utils"
import{useHistory} from "react-router-dom"
function Navbar() {
const history = useHistory
const handleLogOut=()=>{
    logOut()
    history.push("/")
}

  return (
    <div>Navbar

        <button onClick={handleLogOut}>Log Out</button>
    </div>
  )
}

export default Navbar