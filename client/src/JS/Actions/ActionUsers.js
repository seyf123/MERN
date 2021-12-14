import axios from 'axios'
import {USERS_LOAD,USERS_SUCCES,USERS_FAIL,USER_DELETE_FAIL,USER_DELETE_SUCCES,USER_ADD_FAIL,USER_ADD_SUCCES, USER_EDIT_SUCCES, USER_EDIT_FAIL, A_USER_GET_SUCCES, A_USER_GET_FAIL} from "../ActionTypes/Const"
//get all users
export const getAllUsers=()=>async dispatch=>{
dispatch({type:USERS_LOAD})
try {
    const response=await axios.get('http://localhost:5000/')
    dispatch({type: USERS_SUCCES, payload : response.data.Users})
} catch (error) {
    console.dir(error)
    dispatch({type:USERS_FAIL, payload : error})
}
}
// delete one user
export const deleteOneUser=(id)=> async dispatch=>{
    try {
        const response=await axios.delete(`http://localhost:5000/${id}`)
        dispatch({type: USER_DELETE_SUCCES})
        dispatch(getAllUsers())
    } catch (error) {
        console.dir(error)
        dispatch({type:USER_DELETE_FAIL, payload : error})
    }
}
// add user
export const addNewUser=(newUser, navigate)=> async dispatch=>{
    try {
        const response=await axios.post('http://localhost:5000/',newUser)
        dispatch({type: USER_ADD_SUCCES})
        dispatch(getAllUsers())
        navigate('/',{replace:true})
    } catch (error) {
        console.dir(error)
        dispatch({type:USER_ADD_FAIL, payload : error.response.data})
        alert(error.response.data)
    }
}
// edit user
export const editOneUser=(id,userModified, navigate)=> async dispatch=>{
    try {
        const response=await axios.put(`http://localhost:5000/${id}`,userModified)
        dispatch({type:USER_EDIT_SUCCES})
        dispatch(getAllUsers())
        navigate('/',{replace:true})
    } catch (error) {
        console.dir(error)
        dispatch({type:USER_EDIT_FAIL, payload : error})
        alert(error.response.data)
    }
}


export const getOneUser=(id)=> async dispatch=>{
    try { 
        const response = await axios.get(`http://localhost:5000/oneUser/${id}`)
        dispatch({type: A_USER_GET_SUCCES, payload: response.data.user})
        console.log(response.data)
        
    } catch (error) {
        console.dir(error)
        dispatch({type:A_USER_GET_FAIL, payload : error})
    }
}