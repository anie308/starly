import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
padding: 10px;

`
const Div = styled.div`
display: flex;
align-items: center;
margin: 5px 0;
/* justify-content: space-between; */
`
const SubDiv1 = styled.div`
padding: 6px 12px;
border-radius: 50%;
background: blue;
color: white;
margin-right: 10px;


`
const SubDiv2 = styled.div`

height:95px ;
min-width:80px;
border-radius: 10px;
background: green;
margin-right:20px;
`
const Body = styled.div``
const Sec = styled.div``
const Title = styled.div`
font-size:20px;
font-weight:600;
`
const Author = styled.div`
`
const Views = styled.div``
const SubDiv3 = styled.div``


    function Trending({item}) {
    return (
        <Container>
             <Div>
                <SubDiv1>
                   {item.id}
                    {/* <Image src={book.img}/> */}
                </SubDiv1>
                <SubDiv2>

                </SubDiv2>
                <SubDiv3>
                    <Body>
                            <Title>{item.title}</Title>
                        <Sec>
                            <Author>{item.author}</Author>
                            <Views>{item.views} views</Views>
                        </Sec>
                    </Body>
                </SubDiv3>
            </Div>
        </Container>
    )
}

export default Trending
