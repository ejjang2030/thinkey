import Sidebar from "components/Sidebar";
import Chat from "components/Chat";
import React from "react";
import "styles/messengerStyles.css";

const Messenger = () => {
    return (
        <div className="app">
            <h1>Lets build a WhatsApp Clone!</h1>
            <div className="app__body">
                <Sidebar/>
                <Chat/>
            </div>
        </div>
    );
};

export default Messenger;