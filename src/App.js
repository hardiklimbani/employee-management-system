import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Page/Dashboard";
import Login from "./Page/Login/index";
import { useLogify } from "react-logify";

function App() {
  const { user, onLogin, onLogout } = useLogify();
  return (
    <div>
      <BrowserRouter>
        <Routes>
        {!user.id && <Route exact path="/" element={<Login onLogin={onLogin}/>} />}
          {user.id && <Route path="/" element={<Dashboard onLogout={onLogout}/>} />}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
