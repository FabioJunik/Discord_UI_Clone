import React from 'react';
import {Container, Role, User, Avatar} from './UserListStyles'

const UserRow = ({nickname, isBot}) =>{
  return (
    <User >
        <Avatar className={isBot?'bot':''}/>
        <strong>{nickname}</strong>
        {isBot && <span>Bot</span> }
    </User>
  )
}

const UserList = () =>{
    
 return (
    <Container>
        <Role>Disponivel - 5</Role>
        <UserRow nickname='José Gonsalves'/>
        <UserRow nickname='Júliana Soba Java23'/>
        <UserRow nickname='Pam Pam'/>

        <Role>Offine - 23</Role>
        <UserRow nickname='António Muteka' isBot/>
        <UserRow nickname='Mauricio Da Costa'/>
        <UserRow nickname='Félix Domingos'/>
        <UserRow nickname='Gerux114'/>
        <UserRow nickname='Manuel Dembo'/>
        <UserRow nickname='Deltom'/>
        <UserRow nickname='Fulano'/>
        <UserRow nickname='Fulano'/>
        <UserRow nickname='Fulano'/>
        <UserRow nickname='Fulano'/>
        <UserRow nickname='Fulano'/>
        <UserRow nickname='Fulano'/>
        <UserRow nickname='Fulano'/>
        <UserRow nickname='Fulano'/>
        <UserRow nickname='Fulano'/>
        <UserRow nickname='Fulano'/>
        <UserRow nickname='Fulano'/>
        <UserRow nickname='Fulano'/>

        
    </Container>
)};

export default UserList;