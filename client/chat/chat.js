import React from 'react';
import { ChatEngine} from 'react-chat-engine';
import auth from './../auth/auth-helper'

function App() {
    var jwt = auth.isAuthenticated();
    console.log(jwt)
    return (
        <ChatEngine
            projectID='1b774355-2b56-4b0b-a1ec-a06728ce5a4f'
            userName={jwt.user.name}
            userSecret={jwt.user.name}
            // onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
}

export default App;