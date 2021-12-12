import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import
{
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const AddBook = () =>
{
  const [ name, setName ] = useState( '' );
  const { addUser } = useContext( GlobalContext );
  const history = useHistory();
  useEffect( () =>
  {
    localStorage.setItem( "users", JSON.stringify( name ) )
  }, [ name ] )
  const onSubmit = ( e ) =>
  {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      name
    }
    addUser( newUser );
    history.push( "/" );
  }

  const onChange = ( e ) =>
  {
    setName( e.target.value );
  }

  return (
    <Form onSubmit={ onSubmit }>
      <FormGroup>
        <Label>Book Name</Label>
        <Input type="text" value={ name } onChange={ onChange } name="name" placeholder="Enter book" required></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}
