import * as React from 'react';
import { Button, Card } from 'react-bootstrap';

const ProjectCard = (props) => {
	return (
		<Card className="project-card">
			<Card.Img variant="top" src={props.project.imgUrl} />
			<Card.Body>
				<Card.Title>{props.project.titulo}</Card.Title>
				<Card.Text>{props.project.descripcion}</Card.Text>
				<Button className="secondary-purple">{'Ver más ->'}</Button>
			</Card.Body>
		</Card>
	);
};

export default ProjectCard;
