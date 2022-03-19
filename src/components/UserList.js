import React, { useContext } from "react"; 
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { GlobalContext } from "../context/GlobalState";

export const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);
  console.log(users);
  return (
    <ListGroup className="mt-4">

    {users.length > 0 ? (
        <>

    {users.map( user => (
            
            <ListGroupItem className="d-flex" key={users.id}>
            <strong> {user.name}</strong>
            <div className="ml-auto">
              <Link className="btn btn-warning mt-2" to={`/edit/${user.id }`}>
                Edit
              </Link>
              <Button color="danger"  onClick={() => removeUser(user.id)} >Delete</Button>
            </div>
          </ListGroupItem>
      )
    
      )}

        </>
    ) : (<>
   <h4 className="text-center"> No users </h4>
    </>)}



    </ListGroup>
  );
};
