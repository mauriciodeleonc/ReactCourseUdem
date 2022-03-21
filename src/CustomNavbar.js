import * as React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
	return (
		<Navbar bg="light" expand="sm" fixed='top' className='custom-navbar'>
			<Container>
				<Navbar.Brand as={Link} to="/">Mi portafolio</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="/#proyectos">Proyectos</Nav.Link>
						<Button
							className="main-purple ms-sm-5"
							href="/#contacto"
						>
							¡Hablemos!
						</Button>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default CustomNavbar;