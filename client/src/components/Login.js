import React, { useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Login = () => {
	const idRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
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
				<Button variant='secondary'>Create new Id</Button>
			</Form>
		</Container>
	);
};

export default Login;
