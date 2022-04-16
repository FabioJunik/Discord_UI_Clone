import React from 'react';
import LayoutStyles from './LayoutStyles';
import ServerList from '../ServerList/ServerList';
import ServerName from '../ServerName/ServerName';
import ChannelInfo from '../ChannelInfo/ChannelInfo';
import ChannelList from '../ChannelList/ChannelList';
import UserInfo from '../UserInfo/UserInfo';
import UserList from '../UserList/UserList';
import ChannelData from '../ChannelData/ChannelData';


const Layout = () => {

return (
    <LayoutStyles>
        <ServerList/>
        <ServerName/>
        <ChannelInfo/>
        <ChannelList/>
        <UserInfo/>
        <ChannelData/>
        <UserList/>
    </LayoutStyles>
)
}

export default Layout