import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {

    const projectId = 'f135e1d0-8999-4545-b622-3954a72de173';

    if(localStorage.length === 0) return <LoginForm />;
    


    return (
       <ChatEngine 
       projectID={projectId}
       userName={localStorage.getItem('username')}
       userSecret={localStorage.getItem('password')}
       height='100vh'
       renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
       />


       
    );
};

export default App;