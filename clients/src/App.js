import NotesPage from "./pages/NotesPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import RequireAuth from "./Components/RequireAuth";
import SignUpPage from "./pages/SignUpPage";
import Logoutpage from "./pages/Logoutpage";
import Home from "./pages/Home";
import CreateNotes from "./Components/CreateNotes";

function App() {
  return (
    <div>
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
          <Route path="/createnotes" element={<CreateNotes />} />
          <Route path="/logout" element={<Logoutpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
