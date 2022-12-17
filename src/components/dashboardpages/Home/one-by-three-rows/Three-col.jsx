import React  from 'react';
import styled from 'styled-components'


const Row = styled.div` 
height:250px;
column-gap:20px;
display:flex;
margin-top:20px;

@media screen and (max-width: 900px){
// margin-top: 10px;
}
`




function Home() {
    return (
        <>
            <Row>
                <div class="col-7 bg-info rounded shadow">
                .
                </div>
                <div class="col bg-info rounded shadow">
                .
                </div>
            </Row>
        </>
    )
}

export default Home
