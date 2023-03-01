import logo from './logo.svg';
import './App.css';
import { LoginComponent } from './components/BasicComponents/Login';
import './bootstrap.css';
import { ApplicationComponent } from './components/Application';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ApplicationComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
