import React from 'react'
import { Button } from './ServerButtonStyles';

const ServerButton = ({isHome,selected,hasNotifications,mentions}) => {
  return (
    <Button
        isHome={isHome}
        hasNotifications={hasNotifications}
        mentions={mentions}
        className={selected ? 'active':''}
    >
        {isHome}
    </Button>
  )
}

export default ServerButton