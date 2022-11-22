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
import GroupDetails from './group-browse/group_details';
import Signup from './home_and_auth/signup';

function App() {
  return (
 <>
            {/* <Home/> */}
         
         {/* <Groups/> */}

         {/* <CreateGroup/> */}

         <Router>

         <Routes>
            
            <Route path = "/:uid" exact element ={<Home/>}/>
            
            <Route path = ":uid/browse-groups"     element ={<Groups/>}> 
            </Route>
            <Route path = ":uid/browse-groups/group-details/:did"  element = {<GroupDetails/>}/>
            <Route path = "create-group"   element ={ <CreateGroup/>}/>
            <Route path = "login" element ={<Login/>}/>
            <Route path = "signup" element ={<Signup/>}/>
            
            <Route path = "*" element = {<Notfound/>}/>
         </Routes>
         </Router>
 
 </>
 
    );
}

export default App;
