import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Graph from './Pages/Graph';
import Info from './Pages/Info';
import Alert from './Pages/Alert';
import {Route, Link} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Header from './Components/Content';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/graph" component={Graph} />
      <Route exact path="/alert" component={Alert} />
      <Route exact path="/info" component={Info} />
    </div>
  );
}

export default App;
