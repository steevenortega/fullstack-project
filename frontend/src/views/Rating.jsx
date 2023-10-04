import React from 'react';
import '../index.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Table } from "reactstrap"



function Rating() {

    const navigate = useNavigate()
    const [ratings, setRatings] = useState([]);
    const [modal, setModal] = useState(false)
    const [aboutToDeleteRating, setAboutToDeleteRating] = useState({})


    const getRatings = () => {
      axios.get('http://localhost:3000/ratings/')
      
      
      .then(response => {
        console.log(response)
          setRatings(response.data)
      })
    }
  
    useEffect(() => {

      getRatings();
  
     
      
  }, []);

  

  const openModal = (rating) => {
    setModal(true)
    setAboutToDeleteRating(rating)
  }

  const handleDeleteRating = (id) => {
    axios.delete(`http://localhost:3000/ratings/${id}`)
      .then(res => {
        getRatings();
      })
    setModal(false)
  }
  
  return (
    <>
      <div className="container">
      <div>
        <Link
          className="btn btn-success"
          to="/rating/create"
        >
          Añadir calificacion
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
        calificacion
      </th>
      <th>
        fecha de calificacion
      </th> 
    </tr>
  </thead>
  <tbody>
  {
        ratings?.map(rating=>{return(
        <tr key={rating.id}>
            <th>
                {rating.id}
            </th>
            <td>
            {rating.id_contrato}
            </td> 
            <td>
            {rating.calificacion}
            </td> 
            <td>
            {rating.fecha_calificacion}
            </td> 
            
            <td>  
            <Link
                    className="btn btn-primary"
                    to={`/rating/edit/${rating.id}`}
                  >
                    Editar
                  </Link>
                  <Button onClick={() => openModal(rating)}>Eliminar</Button>
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
          ¿Estas seguro de eliminar la empresa <span className="fw-bold"> {aboutToDeleteRating.id}</span>?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => handleDeleteRating(aboutToDeleteRating.id)}>
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

  export default Rating;