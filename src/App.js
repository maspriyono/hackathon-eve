import React, { Component } from 'react';

import './App.css';
import store from './reducers';
import { Provider } from 'react-redux';
import Header from './components/header';
import Footer from './components/footer';
import Container from './components/container';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Search from './components/search';
import Profile from './components/profile';
import MessageList from './components/message-list';
import History from './components/history';
import Buy from './components/buy';
import Transaction from './components/transaction';

class LoggedIn extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <Container />
        </div>
      </Provider>
    );
  }
}

class App extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={LoggedIn}/>
            <Route path='/search' component={Search}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/chat' component={MessageList}/>
            <Route path='/history' component={History}/>
            <Route path='/transaction' component={Transaction}/>
            <Route path='/buy/:productId' component={Buy}/>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
