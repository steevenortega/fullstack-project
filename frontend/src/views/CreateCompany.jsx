import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"

export default function CreateCompany() {
  const navigate = useNavigate()
  const [newCompany, setNewCompany] = useState({ nombre_empresa: '' })
  const [errorMessage, setErrorMessage] = useState('')

  const getHandler = (name) => {
    return (event)  => setNewCompany({ ...newCompany, [name]: event.target.value });
  }

  const handleSubmit = (e) => {
    const API_URL = import.meta.env.VITE_API_URL
    e.preventDefault()

    axios.post(
      `${API_URL}/companies/`,
      { nombre_empresa: newCompany.nombre_empresa }
    )
      .then(res => {
        // Si la actualización sale bien
        // lo manda directamente a la pagina principal de las empresas
        setErrorMessage('')
        navigate('/company')
      })
      .catch(error => {
        console.log(error)
        //setErrorMessage(error.response.data.message)
      })
  }

  return (
    <>
      <h1>Añadir empresa</h1>

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