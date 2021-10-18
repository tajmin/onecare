
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
      </BrowserRouter>
    </div>
  );
}

export default App;
