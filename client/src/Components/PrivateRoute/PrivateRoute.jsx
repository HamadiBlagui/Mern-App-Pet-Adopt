import React from 'react'
import {Route,Redirect}from "react-router-dom"
import { isLoggedInt } from '../../utils'

const PrivateRoute = ({component:Component,...rest}) => {
  return (
    <Route 
    {...rest}
    render={(routeData)=>
        isLoggedInt?

    <Component {...rest}{...routeData}/>
    :<Redirect to="/"/>
    }
    />
    
  )
}

export default PrivateRoute