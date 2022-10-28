import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Maincontent from './Component/Maincontent';
import Content from './Component/Content';

function App() {
  return (
    <div className='parent-div'>
      <Navbar/>
      <Maincontent/>
      <Content/>
    </div>
  );
}

export default App;
