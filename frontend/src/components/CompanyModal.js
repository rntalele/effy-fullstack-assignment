import '../css/Modal.css';
import { useState } from 'react';
const CompanyModal = ({handleCancel,handleAdd,handleUpdate,currCompany,operation})=>{
    const [name,setName] = useState(currCompany.name && operation==='update' ?currCompany.name:'');
    const [address,setAddress] = useState(currCompany.address && operation==='update' ?currCompany.address:'');


    return(
            <div className="edit-modal">
                    <div className="edit-modal-content">
                        <div className='edit-modal-title'>
                            <h3>{operation==='add'?'Company':'Edit'} Details</h3>
                        </div>
                        <div className='edit-modal-body'>
                            <label htmlFor="name">Company Name</label>
                            <input type="text" className="form-control mt-2 mb-2" id='name' value={name} onChange={(e)=>setName(e.target.value)}></input>
                            <label htmlFor="address">Address</label>
                            <textarea className="form-control mb-2" id="address" value={address} rows="3" onChange={(e)=>setAddress(e.target.value)}></textarea>
                        </div>
                        <div className='edit-modal-actions'>
                            <button type="button" className="btn btn-outline-secondary" onClick={handleCancel}>Cancel</button>
                            <button type='button' className='btn btn-primary' onClick={operation==='add'?()=>handleAdd(name,address):()=>handleUpdate(name,address,currCompany._id)}>{operation==='add'?'Add' : 'Update'}</button>
                        </div>
                    </div>
            </div>
        
    )
}

export default CompanyModal;