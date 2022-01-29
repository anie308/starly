import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <Router>
     <Routes>
       <Route path='/' element={ <Home/>}/>
       <Route path='/login' element ={<Login/>}/>
       <Route path='/register' element ={<Register/>}/>

      
     </Routes>
    </Router>
  );
}

export default App;
