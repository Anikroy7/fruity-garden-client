
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import Signup from './Components/Login/Signup/Signup';
import NotFound from './Components/NotFound/NotFound';
import Inventory from './Components/Inventory/Inventory';
import RequireAuth from './Components/Auth/RequireAuth/RequireAuth';


function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
