import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/LoginPage/Login';
import SettingsContainer from './components/SettingsContainer';

function App(props) {
  
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderContainer />
        <div className='BodyWrapper'>
          <NavBar />
          <Route exat path='/Profile/:userID?'
            render={() => <ProfileContainer />} />
          <Route path='/Messages'
            render={() => <MessagesContainer />} />
            <Route path='/Login'
            render={() => <Login />} />
            <Route path='/Users'
            render={() => <UsersContainer />} />
            <Route path='/Settings'
            render={() => <SettingsContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
