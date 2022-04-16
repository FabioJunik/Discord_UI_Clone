import React from 'react';
import LayoutStyles from './LayoutStyles';
import ServerList from '../ServerList/ServerList';
import ServerName from '../ServerName/ServerName';
import ChannelInfo from '../ChannelInfo/ChannelInfo';


const Layout = () => {

return (
    <LayoutStyles>
        <ServerList/>
        <ServerName/>
        <ChannelInfo/>
    </LayoutStyles>
)
}

export default Layout