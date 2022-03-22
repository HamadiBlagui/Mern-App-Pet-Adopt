import React from 'react';
import {Card, Button }from 'react-bootstrap';
import post from '../../../../models/Post';
iport

const Post = () => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{post.Title}</Card.Title>
    <Card.Text>{post.description}</Card.Text>
     <Button variant="primary">Partager</Button>
    </Card.Body>
    </Card>
    </div>
  )
}

export default Post