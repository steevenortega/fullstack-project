import React from 'react';
import '../index.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Table } from "reactstrap"



function Contract() {
    const navigate = useNavigate()
    const [contracts, setContracts] = useState([]);
    const [modal, setModal] = useState(false)
    const [aboutToDeleteContract, setAboutToDeleteContract] = useState({})


    const getContracts = () => {
      const API_URL = import.meta.env.VITE_API_URL
      axios.get(`${API_URL}/contracts/`)
      
      
      .then(response => {
        console.log(response)
          setContracts(response.data)
      })
    }
  
    useEffect(() => {

      getContracts();
  
     
      
  }, []);

  

  const openModal = (contract) => {
    setModal(true)
    setAboutToDeleteContract(contract)
  }

  const handleDeleteContract = (id) => {
    const API_URL = import.meta.env.VITE_API_URL
    axios.delete(`${API_URL}/contracts/${id}`)
      .then(res => {
        getContracts();
      })
    setModal(false)
  }
  
  return (
    <>
      <div className="container">
      <div>
        <Link
          className="btn btn-success"
          to="/contract/create"
        >
          Añadir contrato
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
        Fecha inicio
      </th>  
      <th>
        Fecha fin
      </th> 
      <th>
        Valor contrato
      </th>     
    </tr>
  </thead>
  <tbody>
  {
        contracts?.map(contract=>{return(
        <tr key={contract.id}>
            <th>
                {contract.id}
            </th>
            <td>
            {contract.fecha_inicio}
            </td> 
            <td>
            {contract.fecha_fin}
            </td> 
            <td>
            {contract.valor_contrato}
            </td> 
            <td>  
            <Link
                    className="btn btn-primary"
                    to={`/contract/edit/${contract.id}`}
                  >
                    Editar
                  </Link>
                  <Button onClick={() => openModal(contract)}>Eliminar</Button>
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
          ¿Estas seguro de eliminar el contrato <span className="fw-bold"> {aboutToDeleteContract.id}</span>?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => handleDeleteContract(aboutToDeleteContract.id)}>
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

  export default Contract;