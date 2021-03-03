import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {

    if(!localStorage.getItem('usernmame')) return <LoginForm />

    return (
       <ChatEngine 
       projectID='f135e1d0-8999-4545-b622-3954a72de173'
       userName='gavinev98'
       userSecret='kerry1234'
       height='100vh'
       renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
       />


       
    );
};

export default App;