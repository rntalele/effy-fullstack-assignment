
import {useState,useEffect} from 'react';
import axios from 'axios';
import { config } from '../App';
import CompanyList from './CompanyList';
import  {useNavigate}  from "react-router-dom";
import { Link } from 'react-router-dom';
import { APIKEY } from '../APIKEY';
const HomePage = ()=>{

    const [companyData,setCompanyData] = useState();
    const [showModal,setShowModal] = useState(false);


    const navigate = useNavigate();

    useEffect(()=>{
        fetchCompanies();
    },[])

    const fetchCompanies = async ()=>{
        let data = await axios.get(`${config.endpoint}/companies`);
        setCompanyData(data.data);
    }

     const handleCancel = ()=>{
        setShowModal(false);
    }

    const getLatLong = async (address)=>{
        let result = await axios.get('https://maps.googleapis.com/maps/api/geocode/json?address='+ address + '&key='+APIKEY.secret);
        return {latitude:result.data.results[0].geometry.location.lat,longitude:result.data.results[0].geometry.location.lng}
    }

    const handleAdd = async (name,address) => {
        try {
            let {latitude,longitude} = await getLatLong(address);
            await axios.post(config.endpoint+'/companies',{name,address,coordinates:{latitude:latitude,longitude:longitude}});
            setShowModal(false);
            fetchCompanies();
            navigate('/')
        } catch (error) {
            alert(`Something Went Wrong \n ${error.message}`)
        }
    }

    const handleUpdate = async (name,address,id) => {
        try {
            await axios.put(config.endpoint+'/companies/'+id,{name,address});
            setShowModal(false);
            fetchCompanies();
            navigate('/')
        } catch (error) {
            alert(`Something Went Wrong \n ${error.message}`)
        }
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(config.endpoint+'/companies/'+id);
            setShowModal(false);
            fetchCompanies();
            navigate('/')
        } catch (error) {
            alert(`Something Went Wrong \n ${error.message}`)
        }
    }

    

    

    return(
        <div className="container">
            <h1 className="text-center">Companies</h1>
            <Link to='/users'>
                <button type="button" className="btn btn-primary">View All Users</button>
            </Link>
            <CompanyList 
                companyData={companyData ? companyData : []} 
                handleCancel={handleCancel} 
                handleAdd={handleAdd}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete} 
                showModal={showModal}
                setShowModal={setShowModal}
                
                />
            
        </div>
    )
}

export default HomePage;