import axios from 'axios';
import {useState,useEffect} from 'react';

import { config } from '../App';
import UserModal from './UserModal';
import  {useNavigate}  from "react-router-dom";
const UserList = ()=>{
    const [userData,setUserData] = useState();
    const [showModal,setShowModal] = useState(false);
    const [operation,setOperation] = useState();
    const [currUser,setCurrUser] = useState();

    const navigate = useNavigate();

    useEffect(()=>{
        fetchUsers()
    },[])

    const fetchUsers = async ()=>{
        let users = await axios.get(config.endpoint+'/users');
        setUserData(users.data);
    }

    const operationHandler = (operation,user)=>{
        if(user) setCurrUser(user);
        setOperation(operation);
        setShowModal(true);
    }


    const handleCancel = ()=>{
        setShowModal(false);
    }

    const handleAdd = async (firstName,lastName,email,designation,dob) => {
        try {
           await axios.post(config.endpoint+'/users',{firstname:firstName,lastname:lastName,email:email,designation:designation,dob:dob});
           setShowModal(false);
           navigate('/users');
           fetchUsers();
        } catch (error) {
            alert(`Something Went Wrong \n ${error.message}`)
        }
    }

    const handleUpdate = async (firstName,lastName,email,designation,dob,id) => {
        try {
            await axios.put(config.endpoint+'/users/'+id,{firstname:firstName,lastname:lastName,email:email,designation:designation,dob:dob});
            setShowModal(false);
            navigate('/users');
            fetchUsers();
        } catch (error) {
            alert(`Something Went Wrong \n ${error.message}`)
        }
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(config.endpoint+'/users/'+id);
            setShowModal(false);
            navigate('/users');
            fetchUsers();
        } catch (error) {
            alert(`Something Went Wrong \n ${error.message}`)
        }
    }

    const handleDeactivate = async (id) => {
        try {
            await axios.put(config.endpoint+'/users/'+id+'/deactivate');
            setShowModal(false);
            navigate('/users');
            fetchUsers();
        } catch (error) {
            alert(`Something Went Wrong \n ${error.message}`)
        }
    }

    return(
        <div className="container">
            <h1 className='text-center'>Users</h1>
            <div className='d-flex justify-content-between'>
                <button className="btn btn-secondary mt-5 mb-2" onClick={()=>navigate('/')}>Go To Home</button>
                <button className="btn btn-primary mt-5 mb-2" onClick={()=>operationHandler('add')}>Add New User</button>
            </div>
            
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Designation</th>
                    <th scope="col">DOB</th>
                    <th scope="col">Status</th>
                    <th scope='col'></th>
                    <th scope='col'></th>
                    <th scope='col'></th>
                </tr>
            </thead>
            <tbody>
                {
                    userData?.map((user)=>{
                        return (
                            <tr key={user._id}>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td>{user.email}</td>
                                <td>{user.designation}</td>
                                <td>{user.dob}</td>
                                <td>{user.active ? 'Active':'Inactive'}</td>
                                <td>
                                    <button className='btn btn-info' onClick={()=> operationHandler('update',user)}>Edit User Details</button>
                                </td>
                                <td>
                                    <button className='btn btn-warning' onClick={()=>handleDeactivate(user._id)}>Deactivate User</button>
                                </td>
                                 <td>
                                    <button className='btn btn-danger' onClick={()=> handleDelete(user._id)}>Delete User</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        {showModal && <UserModal handleCancel={handleCancel} handleAdd={handleAdd} handleUpdate={handleUpdate} currUser={currUser ? currUser : {}} operation={operation}/>
        }
        </div>
    )
}

export default UserList;