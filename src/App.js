import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Header from './components/header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import MessagesContainer from './components/Messages/MessagesContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className='BodyWrapper'>
          <NavBar />
          <Route exat path='/Profile'
            render={() => <Profile />} />
          <Route path='/Messages'
            render={() => <MessagesContainer store={props.store} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
