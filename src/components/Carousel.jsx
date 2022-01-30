import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick'
 import "slick-carousel/slick/slick.css"; 
 import "slick-carousel/slick/slick-theme.css";


const Container  = styled.div`
height: 60vh;
width: 100vw;

@media screen and (max-width:900px){
    height: 40vh;
}
/* background: yellow; */

`
const Item = styled.div`
display:flex;
justify-content: center;
align-items: center;
margin: 0 10px;
width: 100%;

img{
    width: 100%;
    height: 60vh;

    @media screen and (max-width:900px){
    height: 40vh;
}
}
`
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed:1000,
  
  };

function Carousel() {
    return (
        <Container>
            <Slider {...settings}>
                <Item> <img src="https://media.istockphoto.com/photos/modern-bathroom-interior-stock-photo-picture-id1308282338?b=1&k=20&m=1308282338&s=170667a&w=0&h=QAUOJtB9kMz50CdZtQ9Zzu5HrtjgSizmjDeAZrI4ezc=" alt="" /> </Item>
                <Item>
                    <img src="https://media.istockphoto.com/photos/modern-minimalist-bathroom-picture-id1314091392?b=1&k=20&m=1314091392&s=170667a&w=0&h=JbTcJ8Nq8CAi6YBcn8yNB7Z3nScrIOdKCF5cs_2MqBo=" alt="" />
                </Item>
                <Item>
                    <img src="https://media.istockphoto.com/photos/beautiful-dining-room-picture-id1325104463?b=1&k=20&m=1325104463&s=170667a&w=0&h=K5i05EAMdK4lV8iomRkvlyg01Pk0AF0bkLMtsSsO7BA=" alt="" />
                </Item>
            </Slider>
        </Container>
    )
}

export default Carousel
