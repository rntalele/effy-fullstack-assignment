import axios from "axios";
import {useState} from 'react';
import { useParams } from "react-router-dom";
import { config } from "../App";
import { APIKEY } from "../APIKEY";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const CompanyDetail = () => {
    const params = useParams();
    const [url,setUrl] = useState();
    const [address,setAddress] = useState();
    const [companyName,setCompanyName] = useState();
    const getUrl = async ()=> {
        const company = await axios.get(config.endpoint+'/companies/'+params.id);
        const address = company.data.address;
        setAddress(address);
        setCompanyName(company.name);
        const url = "https://www.google.com/maps/embed/v1/place?key="+APIKEY.secret+"&q=" + address;
        setUrl(url);
    }

    useEffect(()=>{
       getUrl();
    },[])

    
    return (
        <div>
            <h1 className="text-center">Company Details</h1>
            <hr />
            <Link to='/'>
                <button className="btn btn-secondary mx-5">Go Back</button>
            </Link>
            <div className="d-flex flex-column align-items-center">
                <h3>Company Address</h3>
                <p>{address}</p>
                <iframe
                    title={companyName}
                    width="600"
                    height="450"
                    style={{border:0}}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={url}>
                </iframe>
            </div>
         </div>
    )


}

export default CompanyDetail;