import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/routes/Home/Home';
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
