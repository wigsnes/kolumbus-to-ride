import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './pages/HomePage';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <HomePage/>
    </div>
  );
};

export default App;
