import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Home from './pages/routes/Home/Home';
import Login from './pages/routes/Login/Login';
import SignUp from './pages/routes/SignUp/SignUp';
import Browse from './pages/routes/Browse/Browse';
import './App.css';

function App() {  
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/browse" component={Browse}/>    
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
