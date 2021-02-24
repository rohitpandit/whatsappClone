import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container, Form, Button } from 'react-bootstrap';

const Login = ({ onIdSubmit }) => {
	const idRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();

		onIdSubmit(idRef.current.value);
	};

	const createNewId = () => {
		console.log(uuidv4());
		onIdSubmit(uuidv4());
	};

	return (
		<Container
			className='align-items-center d-flex'
			style={{ height: '100vh' }}>
			<Form className='w-100' onSubmit={handleSubmit}>
				<Form.Group>
					<Form.Label>Enter your Id</Form.Label>
					<Form.Control type='text' ref={idRef} />
				</Form.Group>
				<Button type='submit' className='mr-2'>
					Login
				</Button>
				<Button variant='secondary' onClick={createNewId}>
					Create new Id
				</Button>
			</Form>
		</Container>
	);
};

export default Login;
