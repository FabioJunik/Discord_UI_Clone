import React from 'react';
import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './ChannelButtonStyles';

const ChannelButton = ({channelName,selected}) => {
  return (
      <Container className={selected ? 'active':''}>
          <div>
              <HashtagIcon/>
              <span>{channelName}</span>
          </div>
          <div className='iconsRight'>
              <InviteIcon/>
              <SettingsIcon/>
          </div>
      </Container>
  )
}

export default ChannelButton