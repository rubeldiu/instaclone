import React,{useEffect,createContext,useReducer,useContext} from 'react';
import Navbar from './components/Navbar'
import './index.css'
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'
import Home from './components/screen/Home'
import Login from './components/screen/Login'
import Signup from './components/screen/Signup'
import Profile from './components/screen/Profile'
import CreatePost from './components/screen/CreatePost'
import Student from './components/screen/Student'
import UserProfile from './components/screen/UserProfile'
import SubscribedUserPosts from './components/screen/SubscribesUserPost'
import {reducer,initialState} from './reducers/userReducer';
import Reset from './components/screen/Reset'
import NewPassword from './components/screen/Newpassword'


export const UserContext = createContext()
const Routing = ()=>{
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
    }else{
      if(!history.location.pathname.startsWith('/reset'))
           history.push('/signin')
    }
  },[])
  return(
    <Switch>
    <Route exact path='/'> <Home/></Route>
    <Route path='/signin'> <Login/></Route>
    <Route path='/signup'> <Signup/></Route>
    <Route exact path='/profile'> <Profile/></Route>
    <Route path='/create'> <CreatePost/></Route>
    {/* <Route path='/Student'> <Student/></Route> */}
    <Route path='/profile/:userid'> <UserProfile/></Route>
    <Route path="/myfollowingpost">
        <SubscribedUserPosts />
      </Route>
    <Route exact path="/reset">
        <Reset/>
      </Route>
      <Route path="/reset/:token">
        <NewPassword/>
      </Route>
    </Switch>
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <Navbar />
      <Routing />
      
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
