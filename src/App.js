import logo from './logo.svg';
import './App.css';
import Login from './home_and_auth/login';
import Header from './reusable_comp/header';
import Home from './home_and_auth/home';
import GroupCard from './reusable_comp/group_card';
import Groups from './group-browse/groups';
import CreateGroup from './group-browse/creategroup';
import {Route, Routes, Link,    BrowserRouter as Router} from 'react-router-dom';
import Notfound from './reusable_comp/notfound';

function App() {
  return (
 <>
            {/* <Home/> */}
         
         {/* <Groups/> */}

         {/* <CreateGroup/> */}

         <Router>

         <Routes>
            <Route path="/" exact element ={<Home/>}/>
            <Route path="browse-groups" exact element ={<Groups/>}/>
            <Route path="create-group" exact element ={ <CreateGroup/>}/>
 
            <Route path = "*" element = {<Notfound/>}/>
         </Routes>
         </Router>
 
 </>
 
    );
}

export default App;
