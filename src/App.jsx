
import './App.css'
import{Route,Routes,useNavigate} from "react-router-dom";


import Hero from "./components/Homepage/Homepage";
import Signup from './components/Common/Signup';
import Login from './components/Common/Login';
import Dashboard from './components/Pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Users from './components/Pages/Users';
import Layout from './components/Layout';
import Settings from './components/Pages/Settings';


function App() {
  return (
    <>
     <Routes>

         {/* Public Routes */}
        <Route path='/' element={<Hero/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>

        {/* Protected Routes */}
         <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
        </Route>


        {/* Default Redirect */}
        <Route path="*" element={<Login />} />


     </Routes>
     
    </>
  );
}

export default App;

