import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { HomePage } from './pages/HomePage/HomePage'
import { RouterApp } from './router/RouterApp';

function App() {
  return (
    // <div>
    //   <Navbar />
    //   <HomePage />
    // </div>
    <RouterApp>
      <Navbar />
    </RouterApp>
  );
}

export default App;
