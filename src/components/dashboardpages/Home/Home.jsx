import React  from 'react';
import Twocolumns from './one-by-two-rows/Two-col'
import Threecolumns from './one-by-three-rows/Three-col'





function Home() {
    return (
        <>
        <div class="container p-4 pt-5 m-0">
            <Twocolumns />
            <Threecolumns/>
            <Threecolumns/>
            <Threecolumns/>

        </div>        
        </>
    )
}

export default Home
