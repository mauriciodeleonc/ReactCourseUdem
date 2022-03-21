import * as React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const ContactForm = (props) => {
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [message, setMessage] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		props.onSubmit(name, email, message);
	}

	return (
		<Form onSubmit={(e) => handleSubmit(e)}>
			<Form.Group
				className="mb-4"
				controlId="nombre"
			>
				<Form.Label>Nombre</Form.Label>
				<Form.Control
					type="text"
					placeholder="Tu nombre"
					onChange={(e) => setName(e.target.value)}
				/>
			</Form.Group>
			<Form.Group
				className="mb-4"
				controlId="correo"
			>
				<Form.Label>Correo electrónico</Form.Label>
				<Form.Control
					type="email"
					placeholder="Tu correo electrónico"
					onChange={(e) => setEmail(e.target.value)}
				/>
			</Form.Group>
			<Form.Group
				className="mb-4"
				controlId="mensaje"
			>
				<Form.Label>Mensaje</Form.Label>
				<Form.Control
					as="textarea"
					rows={3}
					onChange={(e) => setMessage(e.target.value)}
				/>
			</Form.Group>
			<Button className="main-purple" type='submit'>
				Enviar
			</Button>
		</Form>
	);
};

export default ContactForm;