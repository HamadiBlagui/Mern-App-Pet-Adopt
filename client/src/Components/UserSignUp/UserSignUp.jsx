import React,{useState} from 'react'
import {Form,Col,Row , Button} from "react-bootstrap"
import axios from 'axios'
//import {useHistory}from "react-router-dom"

const UserSignUp = () => {

    const [newUser , setNewUser] = useState({})
    const handleChange=e=>{
        setNewUser({...newUser , [e.target.name] : e.target.value})
    }
    // const history=useHistory()
    const handleClick=()=>{
      axios
      .post('/api/users/register' , newUser)
      .then(()=>console.log('registred sucessfully'))
      .catch(err=>console.log(err.response.data.msg))
      //history.push("/")
    }  
  return (
    <div>
        <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Name
    </Form.Label>
    <Col sm="10">
      <Form.Control plaintext  placeholder="Your name here ...." name="name" onChange={handleChange}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="10">
      <Form.Control plaintext  placeholder ="email@example.com" name="email" onChange={handleChange}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Password" name="password"onChange={handleChange} />
    </Col>
  </Form.Group>
  <Button variant="success" onClick={handleClick} >Register</Button>
</Form>
    
    
    </div>
  )
}

export default UserSignUp