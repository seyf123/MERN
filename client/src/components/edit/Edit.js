import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import { addNewUser, editOneUser, getOneUser } from "../../JS/Actions/ActionUsers";
import { useNavigate, useParams } from "react-router-dom";



const Edit = () => {
    const {id }= useParams();
    const dispatch = useDispatch();
    console.log(id)
 useEffect(() => {
     console.log('editDidMount')
    dispatch(getOneUser(id))
 }, [])

 const oldUser = useSelector(state => state.UserReducer.oneUser)

    const navigate = useNavigate();
    const [editUser, setEditUser] = useState(oldUser);
    useEffect(() => {
    setEditUser(oldUser)
    }, [oldUser])
    const handleChange = (e) => {
      e.preventDefault();
      setEditUser({ ...editUser, [e.target.name]: e.target.value });
    };
    
   const handleEdit = () => {
    dispatch(editOneUser(id, editUser, navigate));
    }; 
    
  
    return (
      <div>
        <Form>
          <Form.Field>
            <label>Full Name</label>
            <input
              placeholder="Full Name"
              name="fullName"
             onChange={handleChange}
              value = {editUser.fullName}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input placeholder="Email" name="email" onChange={handleChange} value={editUser.email} />
          </Form.Field>
          <Button type="submit" onClick={handleEdit} >
            Submit
          </Button>
        </Form>
      </div>
    );
  };
  
  export default Edit;