import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';
import Login from './Login.js';
import Dashboard from './Dashboard.js';
import { ContactsProvider } from '../contexts/ContactsProvider';
import { ConversationsProvider } from '../contexts/ConversationsProvider';

function App() {
	const [id, setId] = useLocalStorage('id');

	const dashboard = (
		<ContactsProvider>
			<ConversationsProvider>
				<Dashboard id={id} />
			</ConversationsProvider>
		</ContactsProvider>
	);

	return id ? dashboard : <Login onIdSubmit={setId} />;
}

export default App;
