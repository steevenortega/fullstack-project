import React from 'react';
import '../index.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap';



function Company() {
    const [companies, setCompanies] = useState([]);
  
    useEffect(() => {
  
      axios.get('http://localhost:3000/companies/')
      
        .then(response => {
            setCompanies(response.data)
        })
      
  }, []);
  
  return (
    <>
      <div className="container">




      <Table
>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        Nombre Empresa
      </th>      
    </tr>
  </thead>
  <tbody>
  {
        companies?.map(company=>{return(
        <tr key={company.id}>
            <th>
                {company.id}
            </th>
            <td>
            {company.nombre_empresa}
            </td>            
            </tr>)           
        })
       }    
  </tbody>
</Table>
      
      </div>
    </>
  )
  }  

  export default Company;