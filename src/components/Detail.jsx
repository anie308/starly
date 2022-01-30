import React from 'react';
import styled from 'styled-components';

const Container = styled.div` `
const Top = styled.div` `
const One = styled.div`
 `
const BookCover = styled.div` 
height: 303px;
width: 140px;
background: blue;
`
const ContentSpec = styled.div` `
const Title = styled.div` `
const Auth = styled.div` `
const Author = styled.div` `
const Status = styled.div` `
const Lang = styled.div` `
const Language = styled.div` `
const AgeRate = styled.div` `
const Rat = styled.div` `
const Rating = styled.div` `
const Chapters = styled.div` `
const Views = styled.div` `
const Action = styled.div` `
const Read = styled.div` `
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

                </BookCover>
                <ContentSpec>
                        <Title></Title>
                       <Auth>
                       <Author></Author>
                       <Status></Status>
                       </Auth>
                       <Lang>
                           <Language></Language>
                           <AgeRate></AgeRate>
                       </Lang>
                       <Rat>
                           <Rating></Rating>
                           <Chapters></Chapters>
                           <Views></Views>
                       </Rat>
                       <Action>
                           <Read></Read>
                           <AddTo></AddTo>
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
