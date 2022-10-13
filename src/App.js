 import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Update from './Components/Update';

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/update" component={Update}/>
      </Switch>
    </>
  );
}

export default App;
