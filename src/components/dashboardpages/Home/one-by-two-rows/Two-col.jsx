import React  from 'react';
// import Style from '../Home/home.css'
import styled from 'styled-components'


const Toprow = styled.div` 
height:140px;
display: flex;
column-gap:20px;

@media screen and (max-width: 900px){
// margin-top: 10px;
}
`




function Twocol() {
    return (
        <>
            <Toprow >
                <div  class="col bg-warning shadow rounded">
                
                </div>
                <div class="col bg-warning shadow rounded">
                </div>
            </Toprow>
        </>
    )
}

export default Twocol
