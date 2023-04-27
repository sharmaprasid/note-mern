import NotesPage from "./pages/NotesPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import RequireAuth from "./Components/RequireAuth";
import SignUpPage from "./pages/SignUpPage";
import Logoutpage from "./pages/Logoutpage";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home />
        <Routes>
          <Route
            index
            element={
              <RequireAuth>
                <NotesPage />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/logout" element={<Logoutpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
