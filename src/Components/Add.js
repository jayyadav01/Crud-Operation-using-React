import React, { useState } from 'react'
import { Button, Form, FormGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom';
import { employee }  from './Employees';
import { v4 as uuid } from 'uuid';

const Add = () => {

    const [name,setName] = useState('');
    const [age,setAge] = useState(''); 

    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        let id = uuid()
        let uniqueId = id.slice(0,8)

        let a = name;
        let b = age;

        employee.push({id:uniqueId,name:a,Age:b})

        history('/')
    }

  return (
    <>
        <Form className='d-grid gap-2' style={{margin:'15rem'}}>
            <FormGroup className='mb-3' controlId='formName'>
                <Form.Control type='text' placeholder='Enter Name' required onChange={(e) => setName(e.target.value)} ></Form.Control>
            </FormGroup>

            <FormGroup className='mb-3' controlId='formName'>
                <Form.Control type='text' placeholder='Enter Age' required onChange={(e) => setAge(e.target.value)} ></Form.Control>
            </FormGroup>

            <Button onClick={(e) => handleSubmit(e)} type='submit'>Submit</Button>
        </Form>
    </>
  )
}

export default Add
 