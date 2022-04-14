import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar,Container, NavLink, NavbarBrand,Row,Col} from "react-bootstrap";
import "./Header.css"

class Header extends React.Component{
    render(){
        return(
         <>
         <Navbar bg="light" variant="light" style={{height:'100px'}} >
             <Container fluid style={{position:'sticky-top'}}>
                <Row>
                    <Col xs lg="1" style={{paddingLeft:'90px'}}>
                    <NavbarBrand>
                     <img className='logo' src='../Assets/gpa.png' alt='logo'/>
                    </NavbarBrand>
                    </Col>
                    <Col xs lg='2.5' style={{paddingRight:'200px',paddingLeft:'75px'}}>
                    <NavbarBrand className='Heading' style={{color:'#1c4966'}}>GPA Calculator</NavbarBrand>
                    </Col>
                    <Col xs lg='1' style={{paddingLeft:'250px'}}>
                    <NavLink className='Hlink'>User</NavLink>
                    </Col>
                    <Col xs lg='1' style={{paddingLeft:'90px'}}>
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