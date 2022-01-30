import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import Book from './pages/Book';

function App() {
  return (
    <Router>
     <Routes>
       <Route path='/' element={ <Home/>}/>
       <Route path='/login' element ={<Login/>}/>
       <Route path='/register' element ={<Register/>}/>
       <Route path='/book' element ={<Book/>}/>

      
     </Routes>
    </Router>
  );
}

export default App;
