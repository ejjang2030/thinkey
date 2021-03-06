import { Avatar, IconButton } from "@material-ui/core";
import DonutLarge from "@material-ui/icons/DonutLarge";
import Chat from "@material-ui/icons/Chat";
import MoreVert from "@material-ui/icons/MoreVert";
import React from "react";
import "styles/Sidebar.css";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLarge/>
                    </IconButton>
                    <IconButton>
                        <Chat/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined/>
                    <input placeholder="Search or start new chat!" type="text"/>
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat={ true }/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    );
};

export default Sidebar;