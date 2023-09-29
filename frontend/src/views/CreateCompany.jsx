import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"

export default function CreateCompany() {
  const navigate = useNavigate()
  const [newCompany, setNewCompany] = useState({ name: '' })
  const [errorMessage, setErrorMessage] = useState('')

  const getHandler = (name) => {
    return (event)  => setNewCompany({ ...newCompany, [name]: event.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post(
      `http://localhost:3000/companies/`,
      { name: newCompany.name }
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