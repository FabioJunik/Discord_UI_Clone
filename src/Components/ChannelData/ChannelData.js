import React from 'react'
import ChannelMessage, {Mention} from '../ChannelMessage/ChannelMessage';
import {Container, Messages, InputWrapper, Input, InputIcon} from './ChannelDataStyles'

const ChannelData = () => {
  return (
    <Container>
        <Messages>

            <ChannelMessage
                author='José Gonçalves'
                date='16/04/2022'
                content='Pessoal como esta indo o projecto?'
                isBot
            />

            <ChannelMessage
                author='Fábio Junik'
                date='16/04/2022'
                content='Vai bem prof acho que termino a tempo'
            />

            <ChannelMessage
                author='Mauricio Da Costa'
                date='16/04/2022'
                content='Tem um bag, que não estou a conseguir resolver'
            />

            <ChannelMessage
                author='José Gonçalves'
                date='16/04/2022'
                content={
                    <><Mention>@Mauricio Da Costa</Mention> Assim colocaste mas nome
                     da variavel Mauricio né? É por isso</>
                }
                isBot
            />

            <ChannelMessage
                author='Pam Pam'
                date='16/04/2022'
                content='Eu já fiz'
            />
            <ChannelMessage
                author='Juliana Soba Java23'
                date='16/04/2022'
                content='Tem tarefa e ninguém me avisou'
            />
            <ChannelMessage
                author='Juliana Soba Java23'
                date='16/04/2022'
                content='Não pode, vocês me odeiam, eu sou a unica menina'
            />
            <ChannelMessage
                author='José Gonçalves'
                date='16/04/2022'
                content={
                    <><Mention>@Fábio Junik</Mention> já conseguiste 
                    baixar os scripts da aula?</>
                }
                isBot
                hasMention
            />
        </Messages>
        <InputWrapper>
            <Input type='text' placeholder='Conversar em #chat-livre'/>
            <InputIcon/>
        </InputWrapper>
    </Container>
  )
}

export default ChannelData;