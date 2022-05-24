import './App.css';
import Login from './component.js/Login';
import SignUp from './component.js/SignUp';
import { Routes, Route, Navigate} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/*' element={<Navigate to="/signup" />} />
      </Routes>
        
        
    </div>
  );
}

export default App;
