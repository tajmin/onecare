
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home/Home';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Home></Home>
      </BrowserRouter>
    </div>
  );
}

export default App;
