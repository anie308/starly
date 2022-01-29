import React  from 'react';
import  styled  from 'styled-components';
import Carousel from '../components/Carousel';
import Categ from '../components/Categ';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import PopularBooks from '../components/PopularBooks';
import RankTrend from '../components/RankTrend';


export const Container = styled.div`
    
`
function Home() {
    return (
        <>
       
        <Navbar/>
        <Carousel/>
        <PopularBooks/>
        <RankTrend/>
        <Categ/>
        <PopularBooks/>
        <Categ/>
        <Categ/>
        <PopularBooks/>
        <Categ/>
        <Footer/>

        </>
    )
}

export default Home
