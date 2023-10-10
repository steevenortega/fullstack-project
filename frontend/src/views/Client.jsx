import React from 'react';
import '../index.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Table } from "reactstrap"



function Client() {
    const navigate = useNavigate()
    const [clients, setClients] = useState([]);
    const [modal, setModal] = useState(false)
    const [aboutToDeleteClient, setAboutToDeleteClient] = useState({})


    const getClients = () => {
      const API_URL = import.meta.env.VITE_API_URL
      axios.get(`${API_URL}/clients/`)
      
      
      .then(response => {
        console.log(response)
          setClients(response.data)
      })
    }
  
    useEffect(() => {

      getClients();
  
     
      
  }, []);

  

  const openModal = (client) => {
    setModal(true)
    setAboutToDeleteClient(client)
  }

  const handleDeleteClient = (id) => {
    const API_URL = import.meta.env.VITE_API_URL
    axios.delete(`${API_URL}/companies//clients/${id}`)
      .then(res => {
        getClients();
      })
    setModal(false)
  }
  
  return (
    <>
      <div className="container">
      <div>
        <Link
          className="btn btn-success"
          to="/client/create"
        >
          Añadir cliente
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
        Nombre cliente
      </th>      
    </tr>
  </thead>
  <tbody>
  {
        clients?.map(client=>{return(
        <tr key={client.id}>
            <th>
                {client.id}
            </th>
            <td>
            {client.nombres}
            </td> 
            <td>  
            <Link
                    className="btn btn-primary"
                    to={`/client/edit/${client.id}`}
                  >
                    Editar
                  </Link>
                  <Button onClick={() => openModal(client)}>Eliminar</Button>
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
          ¿Estas seguro de eliminar la empresa <span className="fw-bold"> {aboutToDeleteClient.nombres}</span>?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => handleDeleteClient(aboutToDeleteClient.id)}>
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

  export default Client;