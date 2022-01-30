import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { book} from '../data'
import BookItem from './BookItem';

const Container  = styled.div`
 padding: 40px 100px;
 background: #F7F9FB;


 @media screen and (max-width:1200px){
     padding: 10px 50px;
 }
 @media screen and (max-width:900px){
     padding: 10px 80px;
 }
 @media screen and (max-width:600px){
     padding: 10px ;
 }

`
const Top  = styled.div`
margin: 10px 0;
display: flex;
align-items: center;
justify-content: space-between;

`
const Div1  = styled.div`
font-size: 30px;
font-weight: 700;

`
const Div2  = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
color: black;
font-family: 'poppins';
`
const BookList  = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 30px;
padding: 20px 0;


@media screen and (max-width:1000px){
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-wrap: wrap;
 }
@media screen and (max-width:500px){
   display: grid;
   grid-template-columns: 1fr 1fr;
grid-gap: 30px;
align-items: center;
 }
@media screen and (max-width:300px){
   display: grid;
   grid-template-columns: 1fr;
grid-gap: 20px;
 }


`
const Div = styled.div`
font-size: 20px;
margin-right: 6px;

`
const Icon = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 14px;
`
function PopularBooks() {
    return (
        <Container>
            <Top>
        <Div1>Popular</Div1>
        <Div2  to='#'>
        <Div>More</Div> 
                   <Icon>
                   <FaArrowRight className='icon'/>
                   </Icon>
        </Div2>
            </Top>
            <BookList>
                {
                    book.map(item => (
                        <BookItem item={item} key={item.id} />
                    ))
                }

            </BookList>


            
        </Container>
    )
}

export default PopularBooks
