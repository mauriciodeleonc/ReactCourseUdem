
import axios from 'axios';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import GithubLogo from './assets/github.png'

const Project = (props) => {
	let { state } = useLocation();

	const [tecnologias, setTecnologias] = useState(undefined);
	const [githubLink, setGithubLink] = useState(undefined);

	useEffect(() => {
		const getProjectFullInfo = async () => {
			await axios.get('/proyecto',
				{
					params: {
						id: state.id
					}
				}).then(res => {
					setTecnologias(res.data.tecnologias);
					setGithubLink(res.data.githubLink);
				})
				.catch(err => {
					throw new Error(err);
				});
		}

		getProjectFullInfo();
	}, [state.id]);

	return (
		<Container className="vertical-center">
			<Row>
				<Col md={6}>
					<Row className='mb-1'>
						<Col>
							<p>{state.fecha.split('T')[0]}</p>
						</Col>
					</Row>
					<Row className='mb-1'>
						<Col>
							<h1>{state.titulo}</h1>
						</Col>
					</Row>
					{githubLink &&
						<Row className='mb-3'>
							<Col>
								<a
									href={githubLink}
									className='secondary-purple'
									target='_blank'
									rel='noreferrer'
								>
									<img
										src={GithubLogo}
										alt='Github logo'
										height='18px'
										className='me-2'
									/>
									Ver en Github
								</a>
							</Col>
						</Row>
					}
					<Row className='mb-4'>
						<Col>
							<p>{state.descripcion}</p>
						</Col>
					</Row>
					{tecnologias &&
						<Row>
							{tecnologias.map((tecnologia, i) =>
								<Col key={i} sm='auto'>
									<p><u>#{tecnologia}</u></p>
								</Col>
							)}
						</Row>
					}
				</Col>
				<Col md={6}>
					<img className='project-img' src={state.imgUrl} alt='Drawing of people building a website' width='100%' />
				</Col>
			</Row>
		</Container>
	);
};

export default Project;