import React from 'react'
import {Form,Col,Row,Button} from "react-bootstrap"


const UserLogin = () => {

    // const  handleChange=e=>{
    //     setNewUser({...newUser , [e.target.name] : e.target.value})

    //     // .post('/api/users/login' , newUser)
    // }
  return (
    <div>
        <Form>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="10">
      <Form.Control plaintext defaultValue="email@example.com" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
{/* <Button variant="success" onClick={handleClick} >Login</Button> */}
</Form>
    
    
    </div>
  )
}

export default UserLogin