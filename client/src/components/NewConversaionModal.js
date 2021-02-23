import React, { Fragment, useState } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import { useContacts } from '../contexts/ContactsProvider';
import { useConversations } from '../contexts/ConversationsProvider';

const NewConversaionModal = ({ closeModal }) => {
	const [selectedContactIds, setSelectedContactIds] = useState([]);
	const { contacts } = useContacts();
	const { createConversations } = useConversations();

	const handleCheckboxChange = (contactId) => {
		setSelectedContactIds((pervSelectedContactIds) => {
			if (pervSelectedContactIds.includes(contactId)) {
				return pervSelectedContactIds.filter((prevId) => {
					return contactId !== prevId;
				});
			} else {
				return [...pervSelectedContactIds, contactId];
			}
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		createConversations(selectedContactIds);
		closeModal();
	};
	return (
		<Fragment>
			<Modal.Header closeButton>Create Contact</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					{contacts.map((contact) => (
						<Form.Group controlId={contact.id} key={contact.id}>
							<Form.Check
								type='checkbox'
								value={selectedContactIds.includes(contact.id)}
								label={contact.name}
								onChange={() => handleCheckboxChange(contact.id)}></Form.Check>
						</Form.Group>
					))}
					<Button type='submit'>Create</Button>
				</Form>
			</Modal.Body>
		</Fragment>
	);
};

export default NewConversaionModal;
