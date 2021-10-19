
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home/Home';
import Login from './components/Pages/Login/Login';
import ServiceInfo from './components/Pages/ServiceInfo/ServiceInfo';
import SignUp from './components/Pages/SignUp/SignUp';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from './components/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/service-info/:serviceID">
              <ServiceInfo></ServiceInfo>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
