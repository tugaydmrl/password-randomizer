import './App.css';
import About from './components/About/About';
import PasswordRandomizer from './components/PasswordInput/PasswordRandomizer';

function App() {
  return (
    <div className="App">
      <PasswordRandomizer />
      <About />
    </div>
  );
}

export default App;
