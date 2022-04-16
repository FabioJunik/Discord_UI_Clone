import React from 'react';
import LayoutStyles from './LayoutStyles';
import ServerList from '../ServerList/ServerList';
import ServerName from '../ServerName/ServerName';

const Layout = () => {

return (
    <LayoutStyles>
        <ServerList/>
        <ServerName/>
    </LayoutStyles>
)
}

export default Layout