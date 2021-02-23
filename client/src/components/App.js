import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';
import Login from './Login.js';
import Dashboard from './Dashboard.js';
import { ContactsProvider } from '../contexts/ContactsProvider';

function App() {
	const [id, setId] = useLocalStorage('id');

	const dashboard = (
		<ContactsProvider>
			<Dashboard id={id} />
		</ContactsProvider>
	);

	return id ? dashboard : <Login onIdSubmit={setId} />;
}

export default App;
