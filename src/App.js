import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import GraphPage from './Pages/Graph';
import Info from './Pages/Info';
import Alert from './Pages/Alert';
import {Route, Link} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Map from './Components/Map';

function App() {
  return (


    <div className="App">
        <Navbar />
        <div className="parent">
          <Header />
          <div className="page-content">
            <Route exact path="/">
              <Home>
                <Map/>
              </Home>
            </Route>
            <Route exact path="/graph" component={GraphPage} />
            <Route exact path="/alert" component={Alert} />
            <Route exact path="/info" component={Info} />
          </div>
        </div>
    </div>

  );
}

export default App;
