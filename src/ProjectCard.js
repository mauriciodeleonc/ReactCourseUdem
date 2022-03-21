import * as React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProjectCard = (props) => {
	return (
		<Card className="project-card">
			<Card.Img variant="top" src={props.project.imgUrl} />
			<Card.Body>
				<Card.Title className='bold project-title'>{props.project.titulo}</Card.Title>
				<Card.Text>{props.project.descripcion}</Card.Text>
				<Button className="secondary-purple" as={Link} to={`/project/${props.project.id}`} state={{ ...props.project }}>{'Ver más ->'}</Button>
			</Card.Body>
		</Card>
	);
};

export default ProjectCard;
