import {useState, useEffect} from 'react';
import { Table } from 'react-bootstrap';
//import { Row, col } from 'react-bootstrap';


const Employee = () => {
    const [employee, setEmployee] = useState([]);

    useEffect(()=>{
        fetch("http://localhost/kongcepts-php-api/")
        .then(res =>
             res.json())
        .then(
        (result) =>{
            setEmployee(result.data);
            console.log(result.data);
        }
        )
    }, [])

    return ( 
        <div className="Employee">
        <p>in this react app fetching employees API by using php and mySql </p>
           
        <Table striped bordered hover variant="dark">

                        <thead>
                    <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Photo</th>
                            <th>branch</th>
                            <th>bank</th>
                        </tr>
                        </thead>

                        <tbody>

                            {employee.length >0 && employee.map(employee => (
                                <tr key={employee.emp_id}>
                                    <td>{employee.emp_id}</td>
                                    <td>{employee.emp_name}</td>
                                    <td>{employee.emp_email}</td>
                                    <td>{employee.emp_photo}</td>
                                    <td>{employee.branch_name}</td>
                                    <td>{employee.bank_name}</td>
                                </tr>
                            ))}
                        </tbody>

                        
                    </Table>
                    
                </div>
            
     );
}
 
export default Employee;