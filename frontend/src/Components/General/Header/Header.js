import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar,Container, NavLink, NavbarBrand,Row,Col} from "react-bootstrap";
import "./Header.css"

class Header extends React.Component{
    render(){
        return(
         <>
         <Navbar bg="light" variant="light" style={{padding:'25px'}} >
             <Container fluid >
                <Row>
                    <Col xs lg="2">
                    <NavbarBrand>
                     <img className='logo' src='../Assets/gpa.png' alt='logo'/>
                    </NavbarBrand>
                    </Col>
                    <Col  xs lg="0.5">
                    <NavbarBrand>GPA Calculator</NavbarBrand>
                    </Col>
                    <Col  xs lg="2">
                    <NavLink className='Hlink'>Home</NavLink>
                    </Col>
                    <Col  xs lg="6.5">
                    <NavLink className='Hlink'>User</NavLink>
                    </Col>
                    <Col >
                    <NavLink className='Hlink'>Logout</NavLink>
                    </Col>
                </Row>
             </Container>
         </Navbar>
         </>
        )
    }
}

export default Header;