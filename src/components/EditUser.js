import React, { useState, useContext, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useNavigate, useParams } from "react-router-dom"; 
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from 'uuid';

export const EditUser = (props) => {
  const { users, editUser } = useContext(GlobalContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser]= useState({
    id: '',
    name: ''
  });

  const currentUserId=id; //_>>> nao se usa mais nas novas versions :    props.match.params.id;
  console.log("ID EE"+ currentUserId)
  const onSubmit = () => {
    editUser(selectedUser);
    navigate('/');
  };

  const onChange= (e) =>{
    setSelectedUser({...selectedUser, [e.target.name]: e.target.value})
    
  }


  useEffect(()=>{
    const userId = currentUserId;
    const selectedUser = users.find(user => user.id === userId);
    setSelectedUser(selectedUser);
  }, [currentUserId, users])

  return (
    <Form onSubmit={onSubmit}>
    <FormGroup>
      <Label>Name</Label>
      <Input type="text" name="name" value={selectedUser.name} onChange={onChange} placeholder="Enter name"></Input>
    </FormGroup>
    <Button type="submit">Update</Button>
    <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
  </Form>
  )
}
