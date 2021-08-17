import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Graph from './Graph';
import Info from './Info';
import Alert from './Alert';
import {Route, Link} from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/graph" component={Graph} />
      <Route exact path="/alert" component={Alert} />
      <Route exact path="/info" component={Info} />
    </div>
  );
}

export default App;
