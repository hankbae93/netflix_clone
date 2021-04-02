import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './PrivateRoute';
import Home from './pages/routes/Home/Home';
import Login from './pages/routes/Login/Login';
import SignUp from './pages/routes/SignUp/SignUp';
import Browse from './pages/routes/Browse/Browse';
import './App.css';

function App() {  
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AuthProvider>
        <div className="App">
          <Switch>
            <PrivateRoute path="/browse" component={Browse} />                                
            {/* 로그인 인증없이 접속하는 유저 Home페이지로 리다이렉트 */}
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>                     
            <Route path="/signup" component={SignUp}/>                     
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
