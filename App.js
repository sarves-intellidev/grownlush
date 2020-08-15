import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Header from './Header';
import Header2 from './Header2';
import Home from './Home';

function App() {
  return (
    <Router>
     <div className="app">
       <Switch>
         <Route path="/checkout">
           <h1>checkout</h1>
         </Route>
         <Route path="/login">
           <h1>Login Page</h1>
         </Route>
         <Route path="/signup">
           <h1>SignUp page</h1>
         </Route>
         <Route path="/store">
           <Header />
           <h1>The Store</h1>
         </Route>
         <Route path="/">
           <Header />
           <Header2 />
           <Home />
         </Route>
       </Switch>
     </div>
    </Router>
  );
}

export default App;
