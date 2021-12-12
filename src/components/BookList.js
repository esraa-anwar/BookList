import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import
{
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";

export const BookList = () =>
{
  const { users, removeUser } = useContext( GlobalContext );

  return (
    <ListGroup className="mt-4 text-black-50">
      { users.length > 0 ? (
        <>
          { users.map( user => (
            <ListGroupItem className="d-flex" key={ user.id }>
              <strong>{ user.name }</strong>
              <div className="ml-auto">
                <Link to={ `/edit/${ user.id }` } color="warning" className="btn btn-warning mr-1">Edit</Link>
                <Button onClick={ () => removeUser( user.id ) } color="danger">Delete</Button>
              </div>
            </ListGroupItem>
          ) ) }
        </>
      ) : (
        <h4 className="text-center">No Books</h4>
      ) }
    </ListGroup>
  )
}
