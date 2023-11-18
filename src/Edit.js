import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { employee } from './Components/Employees'

const Edit = () => {

    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [id,setid] = useState('')

    let history = useNavigate();

    let index = employee.map((e) => {
        return e.id
    }).indexOf(id)

    function handleSubmit(e)
    {
        e.preventDefault()

        let a = employee[index]
        a.Age = age;
        a.id = id;
        a.name = name;
        console.log(a)

        history('/')
    }

    useEffect(() => {
        setid(localStorage.getItem('id'))
        setName(localStorage.getItem('name'))
        setAge(localStorage.getItem('age'))
    } , [])

  return (
    <>
        <Form className='d-grid gap-2' style={{margin:'15rem'}}>
            <FormGroup className='mb-3' controlId='formName'>
                <Form.Control type='text' placeholder='Enter Name' value={name} required onChange={(e) => setName(e.target.value)} ></Form.Control>
            </FormGroup>

            <FormGroup className='mb-3' controlId='formName'>
                <Form.Control type='text' placeholder='Enter Age' value={age} required onChange={(e) => setAge(e.target.value)} ></Form.Control>
            </FormGroup>

            <Button onClick={(e) => handleSubmit(e)} type='submit'>Update</Button>
        </Form>
    </>
  )
}

export default Edit
