import React from 'react'
import Trending from './Trending'
import { book} from '../data';
import styled from 'styled-components';

const Container = styled.div`
    flex:1;

`

const Top= styled.div`
font-size: 32px;
font-family: 'poppins';
font-weight: 700;
margin: 10px 0;
`
const TrendBox= styled.div`
padding: 4px;
border: 1px lightgray solid;
border-radius: 10px;


`


function Trend() {
    return (
        <Container>
            <Top>Trending</Top>
           <TrendBox>
           {
                    book.slice(0,5)
                    .map(item => (
                        < Trending item={item}  key={item.id}/>
                    ))
                }
           </TrendBox>
        </Container>
    )
}

export default Trend
