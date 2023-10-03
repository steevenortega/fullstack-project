import React from 'react';
import '../index.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Table } from "reactstrap"



function Company() {
    const navigate = useNavigate()
    const [companies, setCompanies] = useState([]);
    const [modal, setModal] = useState(false)
    const [aboutToDeleteCompany, setAboutToDeleteCompany] = useState({})


    const getCompanies = () => {
      axios.get('http://localhost:3000/companies/')
      
      .then(response => {
          setCompanies(response.data)
      })
    }
  
    useEffect(() => {

      getCompanies();
  
     
      
  }, []);

  

  const openModal = (company) => {
    setModal(true)
    setAboutToDeleteCompany(company)
  }

  const handleDeleteCompany = (id) => {
    axios.delete(`http://localhost:3000/companies/${id}`)
      .then(res => {
        getCompanies();
      })
    setModal(false)
  }
  
  return (
    <>
      <div className="container">
      <div>
        <Link
          className="btn btn-success"
          to="/company/create"
        >
          Añadir empresa
        </Link>
      </div>

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
            <td>  
            <Link
                    className="btn btn-primary"
                    to={`/company/edit/${company.id}`}
                  >
                    Editar
                  </Link>
                  <Button onClick={() => openModal(company)}>Eliminar</Button>
                </td>         
            </tr>)           
        })
       }    
  </tbody>
</Table>
      
      </div>

      <Modal isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>Modal title</ModalHeader>
        <ModalBody>
          ¿Estas seguro de eliminar la empresa <span className="fw-bold"> {aboutToDeleteCompany.nombre_empresa}</span>?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => handleDeleteCompany(aboutToDeleteCompany.id)}>
            Eliminar
          </Button>{' '}          
          <Button color="secondary" onClick={() => setModal(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
  }  

  export default Company;