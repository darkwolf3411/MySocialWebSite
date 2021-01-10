import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Header from './components/header/Header';
import NavBar from './components/NavBar/NavBar';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className='BodyWrapper'>
          <NavBar />
          <Route exat path='/Profile'
            render={() => <ProfileContainer />} />
          <Route path='/Messages'
            render={() => <MessagesContainer />} />
            <Route path='/Users'
            render={() => <UsersContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
