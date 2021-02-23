import React, { useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ConversationsContext = React.createContext();

export const useConversations = () => {
	return useContext(ConversationsContext);
};

export const ConversationsProvider = ({ children }) => {
	const [conversations, setConversations] = useLocalStorage(
		'Conversations',
		[]
	);

	const createConversations = (recipients) => {
		setConversations((prevConversations) => {
			return [...prevConversations, { recipients, messages: [] }];
		});
	};

	return (
		<ConversationsContext.Provider
			value={{ conversations, createConversations }}>
			{children}
		</ConversationsContext.Provider>
	);
};
