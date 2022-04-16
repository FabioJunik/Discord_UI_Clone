import React from 'react'
import Logo from '../../assets/logoDiscord.png';
import { Button } from './ServerButtonStyles';

const ServerButton = ({isHome,selected,hasNotifications,mentions}) => {
  return (
    <Button
        isHome={isHome}
        hasNotifications={hasNotifications}
        mentions={mentions}
        className={selected ? 'active':''}
    >
        {isHome && <img src={Logo} alt='Logo do Discord'/>}
    </Button>
  )
}

export default ServerButton