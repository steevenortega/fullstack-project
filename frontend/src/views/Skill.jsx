import React from 'react';
import '../index.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Table } from "reactstrap"



function Skill() {

    const navigate = useNavigate()
    const [skills, setSkills] = useState([]);
    const [modal, setModal] = useState(false)
    const [aboutToDeleteSkill, setAboutToDeleteSkill] = useState({})


    const getSkills = () => {
      const API_URL = import.meta.env.VITE_API_URL
      axios.get(`${API_URL}/skills/`)
      
      
      .then(response => {
        console.log(response)
          setSkills(response.data)
      })
    }
  
    useEffect(() => {

      getSkills();
  
     
      
  }, []);

  

  const openModal = (skill) => {
    setModal(true)
    setAboutToDeleteSkill(skill)
  }

  const handleDeleteSkill = (id) => {
    const API_URL = import.meta.env.VITE_API_URL
    axios.delete(`${API_URL}/skills/${id}`)
      .then(res => {
        getSkills();
      })
    setModal(false)
  }
  
  return (
    <>
      <div className="container">
      <div>
        <Link
          className="btn btn-success"
          to="/skill/create"
        >
          Añadir Habilidad
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
        Nombre de Habilidad
      </th>      
      
    </tr>
  </thead>
  <tbody>
  {
        skills?.map(skill=>{return(
        <tr key={skill.id}>
            <th>
                {skill.id}
            </th>
            <td>
            {skill.nombres}
            </td>          
            
            <td>  
            <Link
                    className="btn btn-primary"
                    to={`/skill/edit/${skill.id}`}
                  >
                    Editar
                  </Link>
                  <Button onClick={() => openModal(skill)}>Eliminar</Button>
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
          ¿Estas seguro de eliminar la empresa <span className="fw-bold"> {aboutToDeleteSkill.nombres}</span>?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => handleDeleteSkill(aboutToDeleteSkill.nombres)}>
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

  export default Skill;