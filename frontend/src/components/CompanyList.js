import {useState} from 'react';
import CompanyModal from './CompanyModal';
import  {useNavigate}  from "react-router-dom";

const CompanyList = ({companyData,handleCancel,handleAdd,handleUpdate,handleDelete,showModal,setShowModal}) => {

    
    const [operation,setOperation] = useState();
    const [currCompany,setCurrCompany] = useState();
    const navigate = useNavigate();

    const operationHandler = (operation,company)=>{
        if(company) setCurrCompany(company);
        setOperation(operation);
        setShowModal(true);
    }


    return(
        <>
        <button type="button" className="btn btn-primary mx-2" onClick={()=>operationHandler('add')}>Add New Company</button>
        <table className="table">
             <thead>
                <tr>
                    <th scope="col">Company Name</th>
                    <th scope="col" className="text-center">Number of Users</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {companyData.map((company)=>{
                    return(
                        <tr key={company._id}>
                            <td>{company.name}</td>
                            <td className="text-center">{company.users.length}</td>
                            <td className="text-center">
                                <button className="btn btn-primary mx-2" onClick={()=>navigate('/company/'+company._id+'/users')}>View Users</button>
                                <button className="btn btn-secondary mx-2" onClick={()=>navigate('/companydetails/'+company._id)}>View Company Details</button>
                                <button className="btn btn-info mx-2" onClick={()=>operationHandler('update',company)}>Edit Company</button>
                                <button className="btn btn-danger" onClick={()=>handleDelete(company._id)}>Delete Company</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        {showModal && <CompanyModal 
                        operation={operation} 
                        handleCancel={handleCancel} 
                        currCompany={operation==='update' ? currCompany : {}}
                        handleAdd={handleAdd}
                        handleUpdate={handleUpdate}
                        />
        }
</>
    )
}

export default CompanyList;