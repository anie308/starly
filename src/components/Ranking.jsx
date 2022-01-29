import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
flex:2;
margin-right: 20px;
/* background: lightgray; */

@media screen and (max-width:900px){
    margin: 0;
}


`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`
const More = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
color: black;
font-family: 'poppins';


`
const Text = styled.div`
font-size: 32px;
font-family: 'poppins';
font-weight: 700;
margin: 10px 0;

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
/* .icon{
    font-size: 14px;
} */
`
const Rank = styled.div`
border: 2px lightgray solid;
border-radius: 10px;
background: blue;
height: 90%;

`


function Ranking() {
    return (
        <Container>
            <Top>
                <Text>Ranking</Text>
                <More to='#'>
                    <Div>More</Div> 
                   <Icon>
                   <FaArrowRight className='icon'/>
                   </Icon>
                    </More>
            </Top>
            <Rank></Rank>
            
        </Container>
    )
}

export default Ranking
