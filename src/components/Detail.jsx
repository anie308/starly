import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
/* padding: 20px; */
font-family: 'Poppins';
@media screen and (max-width:900px){

}
 `
const Top = styled.div`

`
const One = styled.div`
background: lime;

display: flex;
padding: 50px 0;

@media screen and (max-width:900px){
flex-direction: column;
justify-content: center;
align-items: center;
}

 `
const BookCover = styled.div` 
padding: 0px 85px 0px 140px;
display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width:900px){
    height: 303px;
width: 200px;
padding: 0;

}


`

const Image = styled.div`
    background: blue;
    height: 323px;
width: 220px;
border-radius: 10px;

`

const ContentSpec = styled.div` 
padding: 20px 0;
/* background: yellow; */
@media screen and (max-width:900px){
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
}
`
const Title = styled.h1` 
font-size: 27px;
color: #3a4a5a;
/* margin-bottom: 10px; */

`
const Auth = styled.div` 
display: flex;
align-items: center;
/* justify-content: space-between; */
color: #3a4a5a;
/* margin-bottom: 10px; */

`
const Author = styled.strong`
font-size: 20px;
`
const Status = styled.strong` 
margin-left: 10px;
font-size: 16px;
`
const Lang = styled.div`
display: flex;
align-items: center;
/* margin-bottom: 10px; */

`
const Language = styled.div` 
font-size: 20px;
`
const AgeRate = styled.div`
margin-left: 10px;
font-size: 14px;
background: gray;
color: white;
padding: 3px 5px;
border-radius: 5px;

`
const Rat = styled.div` 
display: flex;
align-items: center;
color: #3a4a5a;
font-size: 30px;
margin: 15px 0;

`
const Rating = styled.div` 
display: flex;
flex-direction: column;
align-items: center;
 .strong{
    font-size: 20px;

}
.chap{
    font-size: 15px;
}
margin-right: 20px;
`
const Chapters = styled.div` 
display: flex;
flex-direction: column;
align-items: center;
margin-right: 20px;

 .strong{
    font-size: 20px;

}
.chap{
    font-size: 15px;
}

`
const Views = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-right: 20px;

 .strong{
    font-size: 20px;

}
.chap{
    font-size: 15px;
}
`
const Action = styled.div` 
display: flex;
align-items: center;
`
const Read = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
text-decoration: none;
border: none;
outline: none;
background: rgb(59, 70, 82);
color: white;
padding: 7px 30px;
border-radius: 10px;
margin-right: 20px;
cursor: pointer;
`
const AddTo = styled.button` 
cursor: pointer;
outline: none;
border: none;
display:flex;
align-items: center;

.icon{
margin-right:7px;
}
`
const Two = styled.div`
margin-bottom: 30px;
padding: 50px 85px 0px 140px;


@media screen and (max-width:900px){
    padding: 20px;
}
`
const Div1 = styled.div`
display: flex;
align-items: center;

`
const  Div2= styled.div` 
margin-top: 20px;
`
const  Syn= styled.div` 
font-size: 23px;
border-left: solid black 5px;
padding-left:10px ;
margin-right:20px;
`
const Tags = styled.div` 
background: lightgray ;
border: solid 2px gray;
border-radius: 20px;
padding: 0 5px;
font-size: 14px;

`

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
                           <Language>Language: English</Language>
                           <AgeRate>18+</AgeRate>
                       </Lang>
                       <Rat>
                           <Rating>

                           <strong className='strong'>9.9</strong>
                               <div className='chap'>Views</div>
                           </Rating>
                           <Chapters>
                               <strong className='strong'>79</strong>
                               <div className='chap'>Chapters</div></Chapters>
                           <Views>


                           <strong className='strong'>356.7k</strong>
                               <div className='chap'>Views</div>
                           </Views>
                       </Rat>
                       <Action>
                           <Read to='/bookitem'>Read</Read>
                           <AddTo> <FaPlusCircle className='icon'/> Add to Library </AddTo>
                       </Action>
                </ContentSpec>
            </One>
            <Two>
                <Div1>
                <Syn>Synopsis</Syn>
                    <Tags>Erotic</Tags>
                </Div1>
                <Div2>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus cupiditate consectetur similique quis molestias sit. Minus numquam consequuntur fugiat beatae distinctio animi nihil, aperiam, aliquam explicabo laudantium eaque modi eveniet.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad ea maxime facere minima consequuntur deserunt voluptates, placeat porro quia debitis fugit cupiditate? Magnam eveniet dicta sunt soluta cumque voluptatibus?
                </Div2>
            </Two>
        </Top>
    </Container>
  );
}

export default Detail;
