import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { RouterApp } from './router/RouterApp';

function App() {
  return (
    <RouterApp>
      <Navbar />
    </RouterApp>
  );
}

export default App;
