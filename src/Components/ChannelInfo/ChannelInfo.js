import React from 'react'
import { Container, HashtagIcon, Title, Separator, Description} from './ChannelInfoStyles'

const ChanelInfo = () => {
  return (
    <Container>
        <HashtagIcon />
        <Title>Chat-livre</Title>
        <Separator />
        <Description>Canal aberto para conversas</Description>
    </Container>
  )
}

export default ChanelInfo