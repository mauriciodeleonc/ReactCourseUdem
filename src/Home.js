import * as React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

const Home = (props) => {
	const projects = [
		{
			id: 0,
			titulo: 'Mi proyecto ejemplo',
			descripcion:
				'Descripción de mi proyecto lorem ipsum de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum',
			tecnologias: ['React', 'Firebase', 'UI/UX'],
			githubLink: 'https://www.github.com',
			fecha: new Date().toISOString(),
			imgUrl: 'https://cdn.shopify.com/s/files/1/0229/0839/files/portafolio_web_inspiracion_wokine_grande.png?format=jpg&quality=90&v=1553472178',
		},
		{
			id: 1,
			titulo: 'Mi proyecto ejemplo',
			descripcion:
				'Descripción de mi proyecto lorem ipsum de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum',
			tecnologias: ['React', 'Firebase', 'UI/UX'],
			githubLink: 'https://www.github.com',
			fecha: new Date().toISOString(),
			imgUrl: 'https://cdn.shopify.com/s/files/1/0229/0839/files/portafolio_web_inspiracion_wokine_grande.png?format=jpg&quality=90&v=1553472178',
		},
		{
			id: 2,
			titulo: 'Mi proyecto ejemplo',
			descripcion:
				'Descripción de mi proyecto lorem ipsum de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum',
			tecnologias: ['React', 'Firebase', 'UI/UX'],
			githubLink: 'https://www.github.com',
			fecha: new Date().toISOString(),
			imgUrl: 'https://cdn.shopify.com/s/files/1/0229/0839/files/portafolio_web_inspiracion_wokine_grande.png?format=jpg&quality=90&v=1553472178',
		},
		{
			id: 3,
			titulo: 'Mi proyecto ejemplo',
			descripcion:
				'Descripción de mi proyecto lorem ipsum de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum',
			tecnologias: ['React', 'Firebase', 'UI/UX'],
			githubLink: 'https://www.github.com',
			fecha: new Date().toISOString(),
			imgUrl: 'https://cdn.shopify.com/s/files/1/0229/0839/files/portafolio_web_inspiracion_wokine_grande.png?format=jpg&quality=90&v=1553472178',
		},
		{
			id: 4,
			titulo: 'Mi proyecto ejemplo',
			descripcion:
				'Descripción de mi proyecto lorem ipsum de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum',
			tecnologias: ['React', 'Firebase', 'UI/UX'],
			githubLink: 'https://www.github.com',
			fecha: new Date().toISOString(),
			imgUrl: 'https://cdn.shopify.com/s/files/1/0229/0839/files/portafolio_web_inspiracion_wokine_grande.png?format=jpg&quality=90&v=1553472178',
		},
		{
			id: 5,
			titulo: 'Mi proyecto ejemplo',
			descripcion:
				'Descripción de mi proyecto lorem ipsum de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum',
			tecnologias: ['React', 'Firebase', 'UI/UX'],
			githubLink: 'https://www.github.com',
			fecha: new Date().toISOString(),
			imgUrl: 'https://cdn.shopify.com/s/files/1/0229/0839/files/portafolio_web_inspiracion_wokine_grande.png?format=jpg&quality=90&v=1553472178',
		},
		{
			id: 6,
			titulo: 'Mi proyecto ejemplo',
			descripcion:
				'Descripción de mi proyecto lorem ipsum de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum',
			tecnologias: ['React', 'Firebase', 'UI/UX'],
			githubLink: 'https://www.github.com',
			fecha: new Date().toISOString(),
			imgUrl: 'https://cdn.shopify.com/s/files/1/0229/0839/files/portafolio_web_inspiracion_wokine_grande.png?format=jpg&quality=90&v=1553472178',
		},
		{
			id: 7,
			titulo: 'Mi proyecto ejemplo',
			descripcion:
				'Descripción de mi proyecto lorem ipsum de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum',
			tecnologias: ['React', 'Firebase', 'UI/UX'],
			githubLink: 'https://www.github.com',
			fecha: new Date().toISOString(),
			imgUrl: 'https://cdn.shopify.com/s/files/1/0229/0839/files/portafolio_web_inspiracion_wokine_grande.png?format=jpg&quality=90&v=1553472178',
		},
		{
			id: 8,
			titulo: 'Mi proyecto ejemplo',
			descripcion:
				'Descripción de mi proyecto lorem ipsum de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum',
			tecnologias: ['React', 'Firebase', 'UI/UX'],
			githubLink: 'https://www.github.com',
			fecha: new Date().toISOString(),
			imgUrl: 'https://cdn.shopify.com/s/files/1/0229/0839/files/portafolio_web_inspiracion_wokine_grande.png?format=jpg&quality=90&v=1553472178',
		},
		{
			id: 9,
			titulo: 'Mi proyecto ejemplo',
			descripcion:
				'Descripción de mi proyecto lorem ipsum de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum',
			tecnologias: ['React', 'Firebase', 'UI/UX'],
			githubLink: 'https://www.github.com',
			fecha: new Date().toISOString(),
			imgUrl: 'https://cdn.shopify.com/s/files/1/0229/0839/files/portafolio_web_inspiracion_wokine_grande.png?format=jpg&quality=90&v=1553472178',
		},
	];

	return (
		<>
			<Container className="vertical-center">
				<Row>
					<Col md={6}>
						<Row>
							<Col>
								<p>Hola! Mi nombre es...</p>
							</Col>
						</Row>
						<Row>
							<Col>
								<h1>Mauricio De León</h1>
							</Col>
						</Row>
						<Row>
							<Col>
								<p>
									Desarrollador Front End, apasionado por la
									inteligencia artificial, y el diseño UI/UX
								</p>
							</Col>
						</Row>
						<Row>
							<Col>
								<Button
									className="main-purple"
									href="#contacto"
								>
									¡Hablemos!
								</Button>
							</Col>
						</Row>
					</Col>
					<Col md={6}>
						<p>Image</p>
					</Col>
				</Row>
			</Container>
			<Container>
				<Row>
					<Col className="text-center">
						<h2>Mis proyectos</h2>
					</Col>
				</Row>
				<Row>
					{projects.map((project) => (
						<Col
							key={project.id}
							sm={6}
							md={3}
							className="project-column"
						>
							<ProjectCard project={project} />
						</Col>
					))}
				</Row>
			</Container>
			<Container id="contacto" className="mb-5">
				<Row>
					<Col className="text-center">
						<h2>¡Hablemos!</h2>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col sm={4}>
						<Form>
							<Form.Group
								className="mb-3"
								controlId="formBasicEmail"
							>
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type="email"
									placeholder="Enter email"
								/>
								<Form.Text className="text-muted">
									We'll never share your email with anyone
									else.
								</Form.Text>
							</Form.Group>

							<Form.Group
								className="mb-3"
								controlId="formBasicPassword"
							>
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									placeholder="Password"
								/>
							</Form.Group>
							<Form.Group
								className="mb-3"
								controlId="formBasicCheckbox"
							>
								<Form.Check
									type="checkbox"
									label="Check me out"
								/>
							</Form.Group>
							<Button className="main-purple" type="submit">
								Submit
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Home;
