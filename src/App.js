import logo from './logo.svg';
import './App.css';
import Login from './home_and_auth/login';
import Header from './reusable_comp/header';
import Home from './home_and_auth/home';
import GroupCard from './reusable_comp/group_card';
import Groups from './group-browse/groups';
import CreateGroup from './group-browse/creategroup';
function App() {
  return (
 <>
            {/* <Home/> */}
         
         {/* <Groups/> */}

         <CreateGroup/>
 
 </>
 
    );
}

export default App;
