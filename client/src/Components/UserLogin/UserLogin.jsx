import React from 'react'
import {Form,Col,Row,Button} from "react-bootstrap"
import axios from "axios"
import { useState } from 'react'
import {login} from "../../utils"
//import {useHistory} from "react-router-dom"
const UserLogin = () => {

    // const  handleChange=e=>{
    //     setNewUser({...newUser , [e.target.name] : e.target.value})

    //     // .post('/api/users/login' , newUser)
    // }
    const [loginData , setLoginData] = useState({})
    const handleChange=(e)=>{
      setLoginData({...loginData , [e.target.name] : e.target.value});
    }
    // const history=useHistory()

    
    const handleClick=()=>{
      axios
      .post('/api/users/login' , loginData)
      .then((res)=>{login(res.data.token);alert('logged in sucessfully')})
      .catch(err=>console.log(err.response.data.msg))
      //history.push("/")
      

    }
  return (
    <div>
        <Form>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="10">
      <Form.Control plaintext defaultValue="email@example.com" onChange={handleChange}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Password" onChange={handleChange}/>
    </Col>
  </Form.Group>
{/* <Button variant="success" onClick={handleClick} >Login</Button> */}
<Button variant="success" onClick={handleClick} >Login</Button>
</Form>
    
    </div>
  )
}

export default UserLogin