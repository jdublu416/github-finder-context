import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import User from './components/users/User';

import Alert from './components/layout/Alert';
import Home from './components/pages/Home'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'

import GithubState from './context/Github/GithubState'
import AlertState from './context/alert/AlertState'

import './App.css';

const App = () => {
 
    return (
      <GithubState>
        <AlertState>
          <Router>
          <div className='App'>
            <Navbar title='Github Finder' icon='fab fa-github' />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component ={Home}/>
                <Route exact path='/about' component = {About}></Route>
                <Route exact path='/user/:login' component = {User}/>
                <Route component={NotFound}/>
              </Switch>
            </div>
          </div>
          </Router>
        </AlertState>
      </GithubState>
    );
}

export default App;

//**************************functions that were refactored using Context API/Hooks***********************************
//**************************************************************************************************************** */

//One would use this if you want to continue pulling json for users for display
  // async componentDidMount() {

  //   this.setState({ loading: true });

  //   const res = await axios.get(`https://api.github.com/users?client_id=
  //   ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  //   ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   this.setState({
  //     users: res.data,
  //     loading: false
  //   });
  // }


//Search github users**************function written within a functional App component vs original stateful (as above)


  // const searchUsers = async (text) => {

  //   setLoading(true)
  //   const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
  //         ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  //         ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
  //     setUsers(res.data.items);
  //     setLoading(false);
    
  // }

  //   //clear from state
//  const clearUsers = () => {
//                       setUsers([]);
//                       setLoading(false);
//                     }
                    
//   // show alert in reponse to no text in search bar
//   const showAlert = (msg, type) => {
//             setAlert({msg, type});
//             setTimeout(() =>setAlert(null), 3000);
//     };
    
 //get single github user
  // const getUser= async (username) => {

  //   setLoading(true);

  //   const res = await axios.get(`https://api.github.com/users/${username}?client_id=
  //         ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  //         ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
   
  //     setUser(res.data);
  //     setLoading(false);
  // }

  
