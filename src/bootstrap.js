import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import rootReducer from './reducers';

import reducers from './reducers';

import Home from "./components/home";
import Results from "./components/results";

import "./style/main.scss";
//Da error con esta linea
//const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
//const store = createStore(reducers);
const store = createStore(
  reducers,
  applyMiddleware(thunk) 
);
 


function main() {
  ReactDOM.render(
    <Provider store={store}>
   {/* <Provider store={createStoreWithMiddleware(reducers)}>  */}
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/results' component={Results}/>
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);

