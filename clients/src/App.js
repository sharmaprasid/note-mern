import NotesPage from "./pages/NotesPage";
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";
import Login from './pages/Login'
import RequireAuth from "./Components/RequireAuth";
import SignUpPage from "./pages/SignUpPage";
import Logoutpage from "./pages/Logoutpage";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <ul>
      <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/signup'>Signup</Link>
        </li>
        <li>
          <Link to='/logout'>Logout</Link>
        </li>
      </ul>
        <Routes>
          <Route  index element={<RequireAuth><NotesPage/></RequireAuth>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUpPage/>}/>
          <Route path='/logout' element={<Logoutpage/>}/>

          
        </Routes>
        
      </BrowserRouter>
    

    </div>
  );
}

export default App;
