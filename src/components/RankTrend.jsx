import React from 'react';
import styled from 'styled-components';
import Ranking from './Ranking';
import Trend from './Trend';

const Container = styled.div`
margin: 50px 0;
    display: flex;
    /* align-items: center; */
    padding: 100px 100px;

    @media screen and (max-width:1200px){
        padding: 10px 50px;

    }
    @media screen and (max-width:900px){
        padding: 10px;
        flex-direction: column;

    }
`

function RankTrend() {
    return (
        <Container>
            <Ranking/>
            <Trend/>
            
        </Container>
    )
}

export default RankTrend
