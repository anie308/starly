import React from 'react'
import { FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div`
font-family: sans-serif;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: whitesmoke;
padding: 20px;
height: auto;
`
const Soc = styled.div`
padding: 20px 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 430px;
border: 1px solid black;

    /* background: black; */

@media screen and (max-width:900px){
  width: 300px;
}
`

const Google = styled.div`
padding: 10px ;
width: 230px;
border: 1px black solid;
margin: 10px;
margin-top: 0px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;

.icon{
  margin-right: 10px;
}

`

const Reg = styled.div`
text-align: center;
    
`
const Form = styled.form`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
    
`
const Mail = styled(Link)`
text-decoration: none;
color: black;
font-weight: 600;
    
`
const Div = styled.div` 
display: flex;
flex-direction: column;
align-items: flex-start;
margin-top: 10px;

`
const Input = styled.input`
margin-top :5px ;
height: 35px;
width: 230px;
outline: none;
border: black solid 1px;
padding: 0 10px;
font-size: 15px;

`
const Label = styled.label` 
font-size: 18px;
`
const Button = styled.button` 
margin-top: 30px;
height: 35px;
width: 250px;
outline: none;
background: #3B4652;
border: none;
color: white;
font-size: 17px;
cursor: pointer;


`
const Alt = styled.div`
font-size: 20px;
margin: 15px;
display: flex;
align-items: center;

hr{
  width: 60px;
  background: black;
  margin: 0 10px;
  height: 1px;
}
`

function Social() {
    return (
        <Container>
          <Soc>
      <Form>
        <Div>
        <Label>Email</Label>
        <Input type='email' placeholder='name@example.com' required autoComplete='false'/>
        </Div>
        <Div>
        <Label>Password</Label>
        <Input  type='password'  required/>
        </Div>
        <Button type='submit'>Submit</Button>
      </Form>
        
        <Alt><hr /> Or <hr /></Alt>

            <Google>
              <FaGoogle className='icon'/>
              Sign In with Google
            </Google>
          

            <Reg>
           Don't have an account? <Mail to='/register'>Create new account</Mail>
          </Reg>
            <Reg>
          {/* <Mail to='/reset'>Forgot password?</Mail> */}
          </Reg>
          </Soc>
       

          
        </Container>
    )
}

export default Social
