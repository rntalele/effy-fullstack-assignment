import '../css/Modal.css';
import { useState } from 'react';
const UserModal = ({handleCancel,handleAdd,handleUpdate,currUser,operation})=>{
    const [firstName,setFirstName] = useState(currUser.firstname && operation==='update' ?currUser.firstname:'');
    const [lastName,setLastName] = useState(currUser.lastname && operation==='update' ?currUser.lastname:'');
    const [email,setEmail] = useState(currUser.email && operation==='update' ?currUser.email:'');
    const [designation,setDesignation] = useState(currUser.designation && operation==='update' ?currUser.designation:'');
    const [dob,setDob] = useState(currUser.dob && operation==='update' ?currUser.dob:'');


    


    return(
            <div className="edit-modal">
                    <div className="edit-modal-content">
                        <div className='edit-modal-title'>
                            <h3>{operation==='add'?'User':'Edit'} Details</h3>
                        </div>
                        <div className='edit-modal-body'>
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" className="form-control mt-2 mb-2" id='firstname' value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input>
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" className="form-control mt-2 mb-2" id='lastname' value={lastName} onChange={(e)=>setLastName(e.target.value)}></input>
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control mt-2 mb-2" id='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                            <label htmlFor="designation">Designation</label>
                            <input type="text" className="form-control mt-2 mb-2" id='designation' value={designation} onChange={(e)=>setDesignation(e.target.value)}></input>
                            <label htmlFor="dob">DOB</label>
                            <input type="date" className="form-control mt-2 mb-2" id='dob' value={dob} onChange={(e)=>setDob(e.target.value)}></input>   
                        </div>
                        <div className='edit-modal-actions'>
                            <button type="button" className="btn btn-outline-secondary" onClick={handleCancel}>Cancel</button>
                            <button type='button' className='btn btn-primary' onClick={operation==='add'?()=>handleAdd(firstName,lastName,email,designation,dob):()=>handleUpdate(firstName,lastName,email,designation,dob,currUser._id)}>{operation==='add'?'Add' : 'Update'}</button>
                        </div>
                    </div>
            </div>
        
    )
}

export default UserModal;