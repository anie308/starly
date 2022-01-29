    import React  from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive'
import { FaSearch} from 'react-icons/fa'
import Logo from '../assets/word.png'


 const Container = styled.div`
 box-shadow: 0px 5.20673px 72.8942px rgba(0, 0, 0, 0.12);
 background: rgb(59, 70, 82);
 padding: 10px 0;


`
 const Nav = styled.div`
 display: flex;
 justify-content: space-around;
 align-items: center;
 font-family: 'Poppins';




 ${mobile({
     padding: '10px',

})}


`
 const NavLogo = styled(Link)`
 text-decoration: none;

 color: white;
 display: flex;
 align-items: center;
 justify-content: space-between;

 @media screen and (max-width:900px){
    justify-content: center;
 }
`

const Log = styled.img`
height: 40px;
`
const Text = styled.p`
 font-size: 25px;
 font-weight: 600;
 margin: 0;
 margin-left: 10px;

 @media screen and (max-width:900px){
     display: none;
     margin: 0;
 }
`
 const NavLinks = styled.div`
 display: flex;

 
 @media screen and (max-width:568px){
    display: none;
}


`
 const NLink = styled(Link)`
 text-align: center;
 width: 70px;
 font-size: 17px;
 text-decoration: none;
 margin-right: 20px;
 color: white;
 /* border-bottom: 2px red solid; */


 ${mobile({
    marginRight: '0px'
})}

`
const NavSide = styled.div`
display: flex;
align-items: center;
`

const SearchCon = styled.div`
display: flex;
align-items: center;
background: white;
padding: 6px 4px;
border-radius: 20px;
color: black;
width: 200px;
justify-content: space-between;

@media screen and (max-width:900px){
    width:150px;
    /* margin-right: 20px; */
}

`
const LogCon = styled.div`

`
const Login = styled(Link)`
cursor: pointer;
margin-left:8px;
font-size: 18px;
text-decoration: none;
padding: 6px 20px;
border-radius: 6px;
color:#3B4652;
background: white;
@media screen and (max-width:900px){
    padding: 5px 10px;
    font-size: 18px;


}
`

const Mob = styled.div``

const MobNavLinks = styled.div`
display: none;

@media screen and (max-width:568px){
    padding: 5px 10px;
    display: flex;
    /* justify-content: center; */
}
`
const MobNLink = styled(Link)`
text-decoration: none;
font-size: 17px;
color: white;
margin-right: 10px;
`
const Input = styled.input`
    background:none;
    border: none;
    outline: none;
    width: 100px;

`
const Div = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 2px 4px;
color: black;
font-size: 20px;
`








function Navbar() {

  

    return (
        <Container >
            <Nav>
                <NavLogo to='/'>
                    <Log src={Logo}/>
                   <Text> Starly</Text>
                   </NavLogo>
                <NavLinks>
                    <NLink to = '/'>Home</NLink>
                    <NLink to = '#'>Free</NLink>
                    <NLink to = '#'>Browse</NLink>
                    <NLink to = '#'>About</NLink>
                    <NLink to = '#'>About</NLink>
                    <NLink to = '#'>About</NLink>
                </NavLinks>
                <NavSide>
                    <SearchCon >
                        <Input placeholder=' Search...' />
                        <Div>
                            <FaSearch/>
                        </Div>
                    </SearchCon>
                  

                    <LogCon>
                        <Login to='/login'>Login</Login>
                    </LogCon>
                </NavSide>
            </Nav>
            <Mob>
            <MobNavLinks>
                    <MobNLink to = '/'>Home</MobNLink>
                    <MobNLink to = '#'>Free</MobNLink>
                    <MobNLink to = '#'>Browse</MobNLink>
                    <MobNLink to = '#'>Create</MobNLink>
                    <MobNLink to = '#'>Create</MobNLink>
                </MobNavLinks>
            </Mob>
        
        </Container>
    )
}

export default Navbar
