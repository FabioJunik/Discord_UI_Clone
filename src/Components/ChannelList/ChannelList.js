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
        <ChannelButton channelName='geral'/>
        <ChannelButton channelName='Logica'/>
        <ChannelButton channelName='htm-css'/>
        <ChannelButton channelName='Javascript'/>
        <ChannelButton channelName='React js'/>
        <br/>
        <Category>
            <span>Canais de voz</span>
            <AddCategoryIcon/>
        </Category>
        <ChannelButton channelName='Geral'/>
        <ChannelButton channelName='Cabana do José'/>
    </Container>
  )
}

export default ChannelList