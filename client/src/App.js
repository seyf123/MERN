import { useEffect } from "react";
import { getAllUsers } from "./JS/Actions/ActionUsers";
import { useDispatch, useSelector } from "react-redux";
import UserList from "./components/userList/UserList"
import "semantic-ui-css/semantic.min.css";
import { Button } from 'semantic-ui-react'
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Add from "./components/add/Add";
import Edit from "./components/edit/Edit";

function App() {
  const userList = useSelector((state) => state.UserReducer.userList);
  const loading = useSelector((state) => state.UserReducer.loading);
  //console.log(userList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <div className="App">
      <h1>user list</h1>
      <Routes>
        <Route path="/" element={<div><UserList userList={userList} loading={loading}/>
      <Link to="/add"><Button content='ADD' primary /></Link></div>} />
      <Route path='/add' element={<Add/>}/>
      <Route path='/edit/:id' element={<Edit/> }/>
      </Routes>
    </div>
  );
}

export default App;
