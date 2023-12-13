import { Route, Routes } from 'react-router';
import './App.css';
import { Home } from './pages/Home';
import { Journal } from './pages/Journal';
import { Counsellor } from './pages/Counsellor';
import { MoodTracker } from './pages/MoodTracker';
import { Navbar } from './components/Navbar/Navbar';
import Login from "./components/Login/Login.js"
import Signup from "./components/Signup/Signup.js"
import {Blog} from "./components/Blog/Blog"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/counsellor" element={<Counsellor />} />
        <Route path="/mood-tracking" element={<MoodTracker />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

    </div>
  );
}

export default App;
