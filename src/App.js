import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
      <h1 className='text-warning'>this is a fruity garden</h1>
    </div>
  );
}

export default App;
