import React from 'react';
import LayoutStyles from './LayoutStyles';
import ServerList from '../ServerList/ServerList';
import ServerName from '../ServerName/ServerName';
import ChannelInfo from '../ChannelInfo/ChannelInfo';
import ChannelList from '../ChannelList/ChannelList';
import UserInfo from '../UserInfo/UserInfo';


const Layout = () => {

return (
    <LayoutStyles>
        <ServerList/>
        <ServerName/>
        <ChannelInfo/>
        <ChannelList/>
        <UserInfo/>
    </LayoutStyles>
)
}

export default Layout