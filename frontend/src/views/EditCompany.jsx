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
  const [newCompany,setNewCompany] = useState({name: ''}) 
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(()=> {
    axios.get(`http://localhost:3000/companies/${id}`)
      .then((res)=> {
        setCompany(res.data.company)
        setNewCompany(res.data.company)
      })
  },[])

  // Función que maneja el cambio de valor de los inputs
  const getHandler = (name) => {
    return (event)  => setNewCompany({ ...newCompany, [name]: event.target.value });
  }

  // Función que maneja el envio del formulario
  const handleSubmit = (e) => {
    e.preventDefault()

    axios.put(
      `hhttp://localhost:3000/companies/${id}`,
      {name: newCompany.name}
    )
      .then(res => {
        // Si la actualización sale bien
        // lo manda directamente a la pagina principal de las empresas
        setErrorMessage('')
        navigate('/companies')
      })
      .catch(error =>{
        setErrorMessage(error.response.data.message)
      })
  }

  return(
    <>
      <h1>Editar: {company?.name}</h1>

      <Form onSubmit={handleSubmit}>
        {
          errorMessage && <Alert color="danger">{errorMessage}</Alert>
        }

        <FormGroup>
          <Label for="name">Nombre</Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={newCompany.name}
            onChange={getHandler('name')}
          />
        </FormGroup>
        <Button color="success">Guardar</Button>
      </Form>
    </>
  )
}