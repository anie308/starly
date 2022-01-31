import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 100%;
width: 150px;
@media screen and (max-width:768px){
width:150px;
}

`
const BookImg = styled.div`
height: 200px;
width: 160px;
border: 1px solid black;
/* background: orange; */
border-radius: 10px;


@media screen and (max-width:900px){
    width: 140px;
}
    
`
const Image = styled.img`
border-radius: 10px;

object-fit: cover;
height: 100%;
width: 100%;
    
`
const Details = styled.div`
padding: 10px 5px;
display: flex;
flex-direction: column;
justify-content: space-between;
    
`
const Title = styled.h3`
overflow: hidden;
margin-bottom: 4px;
height: 44px;
font-size: 18px;
color: #3A4A5A;
font-weight: bold;
line-height: 22px;
display: -webkit-box;
font-family: 'poppins';
    
`
const Div = styled.div`
display:flex;
flex-direction:column;

`
const Author = styled.strong`   
    overflow: hidden;
    font-size: 12px;
    color: rgba(58,74,90,0.6);
    line-height: 18px;
    font-weight: normal;
    text-align: left;
`
const Views = styled.span`
    overflow: hidden;
    margin-bottom: 4
px
;
    font-size: 12px;
    color: rgba(58,74,90,0.6);
    line-height: 18px;
    font-weight: normal;
    text-align: left;  
`


function CategBook({ item }) {
    return (
        <Container>
            <BookImg>
                <Image src='https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'/>
            </BookImg>
            <Details>
                <Title>{item.title}</Title>
                <Div>
                    <Author>{item.author}</Author>
                    <Views>{item.views}</Views>
                </Div>
            </Details>

        </Container>
    )
}

export default CategBook
