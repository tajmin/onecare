
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home/Home';
import ServiceInfo from './components/Pages/ServiceInfo/ServiceInfo';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service-info/:serviceID">
            <ServiceInfo></ServiceInfo>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
