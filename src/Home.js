import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import websiteBuild from './assets/website-build.svg';
import ContactForm from './ContactForm';
import axios from 'axios';

const Home = (props) => {
	// const projects = [
	// 	{
	// 		id: 0,
	// 		titulo: 'Mi proyecto ejemplo',
	// 		descripcion:
	// 			'Descripción de mi proyecto lorem ipsum de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum',
	// 		fecha: new Date().toISOString(),
	// 		imgUrl: 'https://cdn.shopify.com/s/files/1/0229/0839/files/portafolio_web_inspiracion_wokine_grande.png?format=jpg&quality=90&v=1553472178',
	// 	},
	// 	{
	// 		id: 1,
	// 		titulo: 'Mi proyecto ejemplo',
	// 		descripcion:
	// 			'Descripción de mi proyecto lorem ipsum de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum',
	// 		fecha: new Date().toISOString(),
	// 		imgUrl: 'https://cdn.shopify.com/s/files/1/0229/0839/files/portafolio_web_inspiracion_wokine_grande.png?format=jpg&quality=90&v=1553472178',
	// 	},
	// 	{
	// 		id: 2,
	// 		titulo: 'Mi proyecto ejemplo',
	// 		descripcion:
	// 			'Descripción de mi proyecto lorem ipsum de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum',
	// 		fecha: new Date().toISOString(),
	// 		imgUrl: 'https://cdn.shopify.com/s/files/1/0229/0839/files/portafolio_web_inspiracion_wokine_grande.png?format=jpg&quality=90&v=1553472178',
	// 	},
	// 	{
	// 		id: 3,
	// 		titulo: 'Mi proyecto ejemplo',
	// 		descripcion:
	// 			'Descripción de mi proyecto lorem ipsum de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum',
	// 		fecha: new Date().toISOString(),
	// 		imgUrl: 'https://cdn.shopify.com/s/files/1/0229/0839/files/portafolio_web_inspiracion_wokine_grande.png?format=jpg&quality=90&v=1553472178',
	// 	},
	// 	{
	// 		id: 4,
	// 		titulo: 'Mi proyecto ejemplo',
	// 		descripcion:
	// 			'Descripción de mi proyecto lorem ipsum de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum',
	// 		fecha: new Date().toISOString(),
	// 		imgUrl: 'https://cdn.shopify.com/s/files/1/0229/0839/files/portafolio_web_inspiracion_wokine_grande.png?format=jpg&quality=90&v=1553472178',
	// 	},
	// 	{
	// 		id: 5,
	// 		titulo: 'Mi proyecto ejemplo',
	// 		descripcion:
	// 			'Descripción de mi proyecto lorem ipsum de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum',
	// 		fecha: new Date().toISOString(),
	// 		imgUrl: 'https://cdn.shopify.com/s/files/1/0229/0839/files/portafolio_web_inspiracion_wokine_grande.png?format=jpg&quality=90&v=1553472178',
	// 	},
	// 	{
	// 		id: 6,
	// 		titulo: 'Mi proyecto ejemplo',
	// 		descripcion:
	// 			'Descripción de mi proyecto lorem ipsum de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum',
	// 		fecha: new Date().toISOString(),
	// 		imgUrl: 'https://cdn.shopify.com/s/files/1/0229/0839/files/portafolio_web_inspiracion_wokine_grande.png?format=jpg&quality=90&v=1553472178',
	// 	},
	// 	{
	// 		id: 7,
	// 		titulo: 'Mi proyecto ejemplo',
	// 		descripcion:
	// 			'Descripción de mi proyecto lorem ipsum de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum',
	// 		fecha: new Date().toISOString(),
	// 		imgUrl: 'https://cdn.shopify.com/s/files/1/0229/0839/files/portafolio_web_inspiracion_wokine_grande.png?format=jpg&quality=90&v=1553472178',
	// 	},
	// 	{
	// 		id: 8,
	// 		titulo: 'Mi proyecto ejemplo',
	// 		descripcion:
	// 			'Descripción de mi proyecto lorem ipsum de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum',
	// 		fecha: new Date().toISOString(),
	// 		imgUrl: 'https://cdn.shopify.com/s/files/1/0229/0839/files/portafolio_web_inspiracion_wokine_grande.png?format=jpg&quality=90&v=1553472178',
	// 	},
	// 	{
	// 		id: 9,
	// 		titulo: 'Mi proyecto ejemplo',
	// 		descripcion:
	// 			'Descripción de mi proyecto lorem ipsum de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum Descripción de mi proyecto lorem ipsum',
	// 		fecha: new Date().toISOString(),
	// 		imgUrl: 'https://cdn.shopify.com/s/files/1/0229/0839/files/portafolio_web_inspiracion_wokine_grande.png?format=jpg&quality=90&v=1553472178',
	// 	},
	// ];

	const [projects, setProjects] = useState(undefined);

	useEffect(() => {
		const getAllProjects = async () => {
			await axios.get('/proyectos')
				.then(res => {
					setProjects(res.data);
				})
				.catch(err => {
					throw new Error(err);
				});
		}

		getAllProjects();
	}, []);

	const onSubmit = async (name, email, message) => {
		await axios.post('/contacto', { name, email, message })
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				throw new Error(err);
			});
	}

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
						<img src={websiteBuild} alt='Drawing of people building a website' width='100%' />
					</Col>
				</Row>
			</Container>
			{projects ?
				<Container id="proyectos">
					<Row className="mb-3">
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
				:
				<Container id="proyectos">
					<Row className="mb-3">
						<Col className="text-center">
							<p>Aún no hay proyectos, pero espero que el tuyo sea de los primeros en aparecer aquí</p>
						</Col>
					</Row>
				</Container>
			}
			<Container id="contacto" className="mb-5">
				<Row className="mb-3">
					<Col className="text-center">
						<h2>¡Hablemos!</h2>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col sm={4}>
						<ContactForm onSubmit={onSubmit} />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Home;
