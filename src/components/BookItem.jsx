import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container  = styled(Link)`
text-decoration: none;
color: #3A4A5A;

`
const Div = styled.div`
display: flex;
width: 300px; 
height: 100%;
max-height: 280px;  
@media screen and (max-width:1200px){
  width: 250px;
 }
@media screen and (max-width:900px){
 width: auto;
 flex-direction: column;
 }
@media screen and (max-width:500px){
 width: 130;
 flex-direction: column;
 }


`
const SubDiv1 = styled.div`
height: 160px;
min-width: 120px;
border-radius: 10px;
border: 1px solid black;
margin-right: 10px;
`

const Image = styled.img`
object-fit: cover;
height: 100%;
width: 100%;
border-radius: 10px;

`
const SubDiv2 = styled.div`
padding: 8px 0;
display: flex;
flex-direction: column;
justify-content: space-between;

`
const Title= styled.div`
font-size:20px;
font-weight:600;
color: #3A4A5A;

@media screen and (max-width:500px){
font-size:12px;
 }
`
const Body = styled.div``
const Sec = styled.div`
display: flex ;
justify-content:space-between;
font-size: 14px;
`
const Author = styled.div`
color: #3A4A5A;

`
const Views = styled.div`
@media screen and (max-width:500px){
display: none;
 }`
const Content = styled.div`
font-size:13px;
margin:5px 0;
@media screen and (max-width:500px){
display: none;
 }`
const Status = styled.div`
font-size:14px;
@media screen and (max-width:500px){
display: none;
 }
`


function BookItem({item}) {
    return (
        <Container to='/book'>
          <Div>
          <SubDiv1>
            <Image src='https://media.istockphoto.com/photos/the-musicians-were-playing-rock-music-on-stage-there-was-an-audience-picture-id1319479588?b=1&k=20&m=1319479588&s=170667a&w=0&h=bunblYyTDA_vnXu-nY4x4oa7ke6aiiZKntZ5mfr-4aM='/>
            </SubDiv1>
            <SubDiv2>
                <Title>{item.title}</Title>
                <Body>
                    <Sec>
                        <Author>{item.author}</Author>
                        <Views>{item.views} views</Views>
                    </Sec>
                    <Content>
                      {item.details}
                    </Content>
                    <Status>Completed</Status>
                </Body>
            </SubDiv2>
          </Div>
            
        </Container>
    )
}

export default BookItem
