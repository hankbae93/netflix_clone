import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/routes/Home/Home';
import Login from './pages/routes/Login/Login';
import SignUp from './pages/routes/SignUp/SignUp';
import Browse from './pages/routes/Browse/Browse';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/browse" component={Browse}/>    
      </div>
    </BrowserRouter>
  );
}

export default App;
