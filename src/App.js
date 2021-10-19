
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/Pages/About/About';
import CovidUpdate from './components/Pages/CovidUpdate/CovidUpdate';
import Home from './components/Pages/Home/Home/Home';
import Login from './components/Pages/Login/Login';
import PageNotFound from './components/Pages/PageNotFound/PageNotFound';
import ServiceInfo from './components/Pages/ServiceInfo/ServiceInfo';
import SignUp from './components/Pages/SignUp/SignUp';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Shared/Header/Footer';
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
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/covid-update">
              <CovidUpdate></CovidUpdate>
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
            <Route path="/*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
