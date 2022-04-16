import React from 'react'
import ChannelButton from '../ChannelButton/ChannelButton'
import {Container, Category, AddCategoryIcon} from './ChannelListStyles'

const ChannelList = () => {
  return (
    <Container>
        <Category>
            <span>Canais de texto</span>
            <AddCategoryIcon/>
        </Category>
        <ChannelButton channelName='chat-livre'/>
        <ChannelButton channelName='Estudo'/>
        <ChannelButton channelName='Dline-code'/>
        <ChannelButton channelName='Trabalho'/>
        <ChannelButton channelName='Ok'/>
        <ChannelButton channelName='React js'/>
        <ChannelButton channelName='Javascript'/>
    </Container>
  )
}

export default ChannelList