import React from 'react'
import {book} from '../data'
import styled from 'styled-components'
import CategBook from './CategBook'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Container = styled.div` 

@media screen and (max-width:900px){
    padding: 0px;
}
`
const Top = styled.div` 
padding: 0 90px;
display: flex;
align-items: center;
justify-content: space-between;

@media screen and (max-width:900px){
    padding: 10px;
}
`
const Category = styled.div` 
font-size: 32px;
font-family: 'poppins';
font-weight: 700;
margin: 10px 0;`
const Div = styled.div`
font-size: 20px;
margin-right: 6px;
`
const Icon = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 14px;
/* .icon{
    font-size: 14px;
} */
`
const More = styled(Link)` 

display: flex;
align-items: center;
text-decoration: none;
color: black;
font-family: 'poppins';`


const Catege = styled.div`
padding:10px 100px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;

@media screen and (max-width:768px){
display: grid;
grid-template-columns: 1fr 1fr;
padding:0 10px;
grid-gap: 10px;
}


`

function Categ() {
    return (
        <Container>
            <Top>
                <Category>Love Stories</Category>
                <More to='#'>
                    <Div>More</Div> 
                   <Icon>
                   <FaArrowRight className='icon'/>
                   </Icon>
                    </More>            </Top>
            <Catege>
                {
                    book.slice(0,5)
                    .map(item =>(
                        <CategBook item={item} key={item.id}/>
                    ))
                }
            </Catege>
            
        </Container>
    )
}

export default Categ
