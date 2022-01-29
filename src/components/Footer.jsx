import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div` 
background: #3B4652;

`

const Div = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
padding:40px 20px ;

@media screen and (max-width: 900px){
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
}
`
const Div1 = styled.div` 
display: flex;
flex-direction: column;

@media screen and (max-width: 900px){
margin-top: 10px;
}

`
const Div2 = styled.div`
display: flex;
flex-direction: column;

@media screen and (max-width: 900px){
margin-top: 10px;
}
`
const Div3 = styled.div` 
display: flex;
flex-direction: column;

@media screen and (max-width: 900px){
margin-top: 10px;
}
`
const Div4 = styled.div` 
display: flex;
flex-direction: column;

@media screen and (max-width: 900px){
margin-top: 10px;
}
`
const Text = styled.div`
    color: white;
    font-size: 25px;
`
const FootLink = styled(Link)`
text-decoration: none;
color: white;
font-size: 18px;
    
`

const Copy = styled.div` 
padding: 10px;
text-align: center;
color: white;
`


function Footer() {
    return (
        <Container>
          <Div>
          <Div1>
            <Text>
               Contact
                </Text>
                <FootLink to=''>Lorem</FootLink>
                <FootLink to=''>Fuckin</FootLink>
                <FootLink to=''>Ipsum</FootLink>
                 </Div1>
            <Div2>
            <Text>
               About
                </Text>
            <FootLink to=''>Lorem</FootLink>
                <FootLink to=''>Fuckin</FootLink>
                <FootLink to=''>Ipsum</FootLink>
                 </Div2>
            <Div3>
                <Text>
                Community
                </Text>
            <FootLink to=''>Lorem</FootLink>
                <FootLink to=''>Fuckin</FootLink>
                <FootLink to=''>Ipsum</FootLink>
                 </Div3>
            <Div4>
                <Text>
                Policy
                </Text>
            <FootLink to=''>Lorem</FootLink>
                <FootLink to=''>Fuckin</FootLink>
                <FootLink to=''>Ipsum</FootLink>
                 </Div4>

          </Div>
                 <Copy>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 </Copy>
            
        </Container>
    )
}

export default Footer
