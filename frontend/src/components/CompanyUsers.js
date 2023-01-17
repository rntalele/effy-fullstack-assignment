import axios from "axios";
import { useState,useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { config } from "../App";

const CompanyUsers = ()=>{

    const [users,setUsers] = useState();
    const [allUsers,setAllUsers] = useState();
    const [allCompanies,setAllCompanies] = useState();
    const [showAdd,setShowAdd] = useState(false);
    const [showMigrate,setShowMigrate] = useState(false);
    const [selectedUser,setSelectedUser] = useState('select');
    const [toCompany,setToCompany] = useState('select');
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        fetchCompanyData();
    },[])

    const fetchCompanyData = async ()=> {
        let result = await axios.get(config.endpoint + '/companies/'+ params.id);
        setUsers(result.data.users);
    }

    const fetchAllUsers = async ()=> {
        let result = await axios.get(config.endpoint+'/users');
        setAllUsers(result.data);
    }

    const fetchAllCompanies = async ()=> {
        let result = await axios.get(config.endpoint + '/companies');
        setAllCompanies(result.data);
    }

    const addUserHandler = async ()=>{
        fetchAllUsers();
        setShowAdd(true);
    }

    const migrateUserHandler = async ()=> {
        fetchAllUsers();
        fetchAllCompanies();
        setShowMigrate(true);
    }

    const onUserChangeHandler = (e)=> {
        setSelectedUser(e.target.value)
    }

    const toCompanyChangeHandler = (e)=>{
        setToCompany(e.target.value);
    }

    const addUserToCompany = async (companyId,userId)=> {
        await axios.put(config.endpoint+'/companies/add/'+companyId,{userid:userId});
        setShowAdd(false);
        navigate(0)
    }

    const deleteUserFromCompany = async (companyId,userId) => {
        await axios.put(config.endpoint+'/companies/delete/'+companyId,{userid:userId});
        setShowAdd(false);
        navigate(0)
    }

    const migrateCompany = async (fromCompanyId,toCompanyId,userId)=> {
        await axios.put(config.endpoint+'/companies/delete/'+fromCompanyId,{userid:userId});
        await axios.put(config.endpoint+'/companies/add/'+toCompanyId,{userid:userId});
        setShowMigrate(false);
        navigate(0);
    }


    return(
        <div className="container">
            <div className="d-flex justify-content-between">
                <button className="btn btn-secondary mt-5 mb-2" onClick={()=>navigate('/')}>Go To Home</button>
                <div className="d-flex">
                    <button className="btn btn-primary mt-5 mb-2 mx-2" onClick={()=>addUserHandler()}>Add User</button>
                    <button className="btn btn-primary mt-5 mb-2" onClick={()=>migrateUserHandler()}>Migrate User</button>
                </div>
            </div>
            {
                showAdd && (
                    <>
                    <h4>Add User to Company</h4>
                    <div className="d-flex">
                        
                        <select className="form-select" value={selectedUser} onChange={onUserChangeHandler}>
                            <option value='select'>Select from the Users List</option>
                            {
                                allUsers?.map((user)=><option value={user._id} key={user._id}>{user.firstname + ' ' + user.lastname}</option>)
                            }
                            
                        </select>
                        <button className="btn btn-outline-primary mx-2" onClick={()=>addUserToCompany(params.id,selectedUser)}>Add</button>
                    </div>
                    </>
                )
            }
            {
                showMigrate && (
                    <>
                    <div className="d-flex align-items-center justify-content-center">
                        <h5 className="p-0 mx-2">Migrate</h5>
                        <select className="form-select" value={selectedUser} onChange={onUserChangeHandler}>
                            <option value='select'>Select from the Users List</option>
                            {
                                users?.map((user)=><option value={user._id} key={user._id}>{user.firstname + ' ' + user.lastname}</option>)
                            }
                            
                        </select>
                        <h5 className="p-0 mx-2">To</h5>
                        <select className="form-select" value={selectedUser} onChange={toCompanyChangeHandler}>
                            <option value='select'>Select Company</option>
                             {
                                allCompanies?.map((company)=><option value={company._id} key={company._id}>{company.name}</option>)
                            }
                        </select>
                        
                        <button className="btn btn-outline-primary mx-2" onClick={()=>migrateCompany(params.id,toCompany,selectedUser)}>Migrate</button>
                    </div>
                    </>
                )
            }
            
            
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Status</th>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user)=>{
                            return (
                                <tr key={user._id}>
                                    <td>{user.firstname + ' ' + user.lastname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.designation}</td>
                                    <td>{user.active ? 'Active' : 'Inactive'}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={()=>deleteUserFromCompany(params.id,user._id)}>Remove</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )

}

export default CompanyUsers