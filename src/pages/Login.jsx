import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Social from '../components/Social';

const Container = styled.div` 
`

function Login() {
    return (
        <Container>
            <Navbar/>
            <Social/>
            <Footer/>
         
        </Container>
    )
}

export default Login
