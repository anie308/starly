import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import Book from './pages/Book';
import Read from './pages/Read';
import Dashboard from './pages/Dashboard/Layout';
// import Dashboardhome from './components/Navbar/testnav/Navbar';

function App() {
  return (
    <Router>
     <Routes>
       <Route path='/' element={ <Home/>}/>
       <Route path='/login' element ={<Login/>}/>
       <Route path='/register' element ={<Register/>}/>
       <Route path='/book' element ={<Book/>}/>
       <Route path='/bookitem' element ={<Read/>}/>
       <Route path='/dashboard' element ={<Dashboard/>}/>
       {/* <Route path='/home' element ={<Dashboardhome/>}/> */}
     </Routes>
    </Router>
  );
}

export default App;
