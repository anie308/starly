import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
padding: 20px;
background:yellow;
 `
const Top = styled.div`
`
const One = styled.div`
display: flex;

 `
const BookCover = styled.div` 
padding: 0px 85px 0px 140px;


@media screen and (max-width:900px){
    height: 303px;
width: 140px;
}


`

const Image = styled.div`
    background: blue;
    height: 303px;
width: 220px;

`

const ContentSpec = styled.div` `
const Title = styled.h1` 
font-size: 32px;
color: #3a4a5a;

`
const Auth = styled.div` 
display: flex;
align-items: center;
color: #3a4a5a;

`
const Author = styled.strong`
font-size: 20px;
`
const Status = styled.strong` 
font-size: 16px;
`
const Lang = styled.div`
display: flex;
`
const Language = styled.div` 
font-size: 20px;
`
const AgeRate = styled.div`
font-size: 16px;
`
const Rat = styled.div` 
display: flex;
color: #3a4a5a;
font-size: 30px;

`
const Rating = styled.strong` `
const Chapters = styled.strong` `
const Views = styled.strong` `
const Action = styled.div` 
display: flex;
align-items: center;
`
const Read = styled.button`
padding: 5px 10px;
`
const AddTo = styled.div` `
const Two = styled.div` `
const Div1 = styled.div` `
const  Div2= styled.div` `
const  Syn= styled.div` `
const Tags = styled.div` `

function Detail() {
  return (
    <Container>
        <Top>
            <One>
                <BookCover>
                    <Image/>
                </BookCover>
                <ContentSpec>
                        <Title>Her Forbidden Alpha</Title>
                       <Auth>
                       <Author>By: Moonlight Muse</Author>
                       <Status>Completed</Status>
                       </Auth>
                       <Lang>
                           <Language>English</Language>
                           <AgeRate>18+</AgeRate>
                       </Lang>
                       <Rat>
                           <Rating>9.9</Rating>
                           <Chapters>79</Chapters>
                           <Views>356.7k</Views>
                       </Rat>
                       <Action>
                           <Read>Read</Read>
                           <AddTo>Add to Library</AddTo>
                       </Action>
                </ContentSpec>
            </One>
            <Two>
                <Div1>
                <Syn>Synopsis</Syn>
                    <Tags></Tags>
                </Div1>
                <Div2>
                  
                </Div2>
            </Two>
        </Top>
    </Container>
  );
}

export default Detail;
