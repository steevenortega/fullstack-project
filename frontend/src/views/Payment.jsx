import React from 'react';
import '../index.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Table } from "reactstrap"



function Payment() {
    const navigate = useNavigate()
    const [payments, setPayments] = useState([]);
    const [modal, setModal] = useState(false)
    const [aboutToDeletePayment, setAboutToDeletePayment] = useState({})


    const getPayments = () => {
      const API_URL = import.meta.env.VITE_API_URL
      axios.get(`${API_URL}/payments/`)
      
      
      .then(response => {
        console.log(response)
          setPayments(response.data)
      })
    }
  
    useEffect(() => {

      getPayments();
  
     
      
  }, []);

  

  const openModal = (payment) => {
    setModal(true)
    setAboutToDeletePayment(payment)
  }

  const handleDeletePayment = (id) => {
    const API_URL = import.meta.env.VITE_API_URL
    axios.delete(`${API_URL}/payments/${id}`)
      .then(res => {
        getPayments();
      })
    setModal(false)
  }
  
  return (
    <>
      <div className="container">
      <div>
        <Link
          className="btn btn-success"
          to="/payment/create"
        >
          Añadir pago
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
        identificacion del contrato
      </th>      
      <th>
        fecha de pago
      </th>
      <th>
        monto del pago
      </th> 
    </tr>
  </thead>
  <tbody>
  {
        payments?.map(payment=>{return(
        <tr key={payment.id}>
            <th>
                {payment.id}
            </th>
            <td>
            {payment.nombres}
            </td> 
            <td>
            {payment.id_contrato}
            </td> 
            <td>
            {payment.fecha_pago}
            </td> 
            <td>
            {payment.monto}
            </td> 
            <td>  
            <Link
                    className="btn btn-primary"
                    to={`/payment/edit/${payment.id}`}
                  >
                    Editar
                  </Link>
                  <Button onClick={() => openModal(payment)}>Eliminar</Button>
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
          ¿Estas seguro de eliminar la empresa <span className="fw-bold"> {aboutToDeletePayment.id_contrato}</span>?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => handleDeletePayment(aboutToDeletePayment.id)}>
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

  export default Payment;