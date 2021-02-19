import logo from './logo.svg';
import './App.css';
import Employee from "./Employee";
import { Navbar, Container } from 'react-bootstrap';



function App() {
  return (
    <div className="App">
      <Navbar expand="lg" variant="light" bg="light">
  <Container>
    <Navbar.Brand href="#">Employees</Navbar.Brand>
  </Container>
</Navbar>

      <Employee/>
    </div>
  );
}

export default App;
