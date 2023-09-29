import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Alert, Button, Form, FormGroup, Input, Label } from "reactstrap"

export default function EditCompany() {
  const { id } = useParams()
  const navigate = useNavigate()
  // Estado donde se guarda la empresa actual
  const [company, setCompany] = useState({}) 
  // Estado donde se guarda los datos modificados de esta empresa
  const [newCompany,setNewCompany] = useState({nombre_empresa: ''}) 
  const [errorMessage, setErrorMessage] = useState('')

  //console.log(company.nombre_empresa);

  useEffect(()=> {
    axios.get(`http://localhost:3000/companies/${id}`)
      .then((res)=> {
        setCompany(res.data[0])
        setNewCompany(res.data[0])
      })
  },[])

  

  // Función que maneja el cambio de valor de los inputs
  const getHandler = (name) => {
    return (event)  => setNewCompany({ ...newCompany, [name]: event.target.value });
  }

  // Función que maneja el envio del formulario
  const handleSubmit = (e) => {
    e.preventDefault()

    axios.patch(
      `http://localhost:3000/companies/${id}`,
      {nombre_empresa: newCompany.nombre_empresa}
    )
      .then(res => {
        // Si la actualización sale bien
        // lo manda directamente a la pagina principal de las empresas
        setErrorMessage('')
        navigate('/company')
      })
      .catch(error =>{
        setErrorMessage(error.response.data.message)
      })
  }

  return(
    <>
    
      <h1>Editar: {company?.nombre_empresa}</h1>

      <Form onSubmit={handleSubmit}>
        {
          errorMessage && <Alert color="danger">{errorMessage}</Alert>
        }

        <FormGroup>
          <Label for="nombre_empresa">Nombre</Label>
          <Input
            id="nombre_empresa"
            nombre_empresa="nombre_empresa"
            type="text"
            value={newCompany.nombre_empresa}
            onChange={getHandler('nombre_empresa')}
          />
        </FormGroup>
        <Button color="success">Guardar</Button>
      </Form>
    </>
  )
}