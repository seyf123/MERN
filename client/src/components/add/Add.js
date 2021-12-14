import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import { addNewUser } from "../../JS/Actions/ActionUsers";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({ fullName: "", email: "" });
  const handleChange = (e) => {
    e.preventDefault();
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addNewUser(newUser, navigate));
    setNewUser({ fullName: "", email: "" });
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
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input placeholder="Email" name="email" onChange={handleChange} />
        </Form.Field>
        <Button type="submit" onClick={handleAdd}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Add;
