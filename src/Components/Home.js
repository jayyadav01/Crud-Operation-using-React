import React from 'react'
import { employee } from './Employees'
import { Button , Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    let history = useNavigate()
    function handleDelete(id)
    {
        let index = employee.map((e) => {
            return e.id
        }).indexOf(id)
        
        employee.splice(index,0)
        console.log(employee.splice(index,1));

        history('/');
    }
    function handleEdit(id,name,age)
    {
        localStorage.setItem('id',id)
        localStorage.setItem('name',name)
        localStorage.setItem('age',age)
    }
  return (
    <>
        <div style={{margin : '10rem'}}>
            <Table striped bordered hover size='sm' >
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employee && employee.length ? 
                        employee.map((item,id) => {
                            return(
                                    <tr key={id}>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.Age}
                                        </td>
                                        <td>
                                            <Link to={'/edit'}>
                                                <Button onClick={() => handleEdit(item.id,item.name,item.Age)}>Edit</Button>

                                            </Link>
                                            &nbsp;
                                            <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                                        </td>
                                    </tr>
                        )})
                        
                        :
                        'Nothing'
                    }
                </tbody>
            </Table>

            <br/>

            <Link className='d-grid gap-2' to={'/add'}>
                    <Button size='lg'>Add</Button>
            </Link>

        </div>
  
    </>
  )
}

export default Home
