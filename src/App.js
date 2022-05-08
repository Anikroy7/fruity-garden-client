
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
import ManageInventories from './Components/ManageInventories/ManageInventories';
import AllInventoriesDetail from './Components/AllInvetoriesDetail/AllInventoriesDetail';
import AddItem from './Components/AddItem/AddItem';
import MyItems from './Components/MyItems/MyItems';


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
        <Route path='/inventories' element={
          <RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>
        }></Route>
        <Route path='/additem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path='/myitem' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>

      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
