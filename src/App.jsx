import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Edit from './Components/Edit';
import Login from "./pages/Login";
import {useValidator} from './Hooks/useValidator'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { UseAuthContext } from './Hooks/useAuthContext';
// import { UseLogout } from './Hooks/useLogout';
// import { useEffect } from 'react';

function App() {
  // const {logout}=  UseLogout()
  // const { user } = UseAuthContext();
//   let token2 
//   let local
//   const check_token =()=>{
//     if(user && user.token){
//   const token = user.token
//    local = JSON.parse(localStorage.getItem('user')); // Parse the user object from local storage
//  if (local && local.token){
//   token2 = local.token
//  }
//   console.log(token)
// console.log(token2)

//   if(token !== token2){
//    logout()
//   }
// }
//   }

// useEffect(() => {
//   check_token();
// }, [local]);
//////
  const {valid} = useValidator()
  return (
      <BrowserRouter>
      <Navbar />
      <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/login" element={valid ? <Home />:<Login />} />
        <Route path='/dashboard' element={valid ? <Dashboard />:<Home />}></Route>
        <Route path='/edit/:id' element={valid ? <Edit />: <Home />}></Route>
        
      </Routes> 
      </div>
      </BrowserRouter>
  );
}

export default App;
