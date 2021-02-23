import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';
import Login from './Login.js';
import Dashboard from './Dashboard.js';

function App() {
	const [id, setId] = useLocalStorage('id');

	return id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />;
}

export default App;
