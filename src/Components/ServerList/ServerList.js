import React from 'react'
import { Container, Separator } from './ServerListStyles';
import ServerButton from '../ServerButton/ServerButton';

const ServerList = () => {
  return (
    <Container>
        <ServerButton isHome/>
        <Separator />
        <ServerButton />
        <ServerButton hasNotifications/>
        <ServerButton mentions={3}/>
        <ServerButton mentions={156}/>
        <ServerButton />
        <ServerButton hasNotifications/>
        <ServerButton />
        <ServerButton />
        <ServerButton mentions={13}/>
        <ServerButton />
        <ServerButton />
    </Container>
  )
}

export default ServerList