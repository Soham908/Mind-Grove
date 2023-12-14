import { Route, Routes } from 'react-router';
import './App.css';
import { Home } from './pages/Home';
import { Journal } from './pages/Journal';
import { Counsellor } from './pages/Counsellor';
import { MoodTracker } from './pages/MoodTracker';
import { Navbar } from './components/Navbar/Navbar';
import {Login} from './components/Login/Login'
import {Signup} from './components/Signup/Signup'
import {Blog} from "./components/Blog/Blog"
import { createContext, useState } from 'react';
import {Footer} from './components/Footer/Footer'

export const  ApplicationContext  = createContext()
function App() {
  
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [blogData, setBlogData] = useState({})
  
  return (
    <ApplicationContext.Provider  value={ { isLoggedIn, setLoggedIn, blogData, setBlogData } }>
    <div className="App">
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/counsellor" element={<Counsellor />} />
        <Route path="/mood-tracking" element={<MoodTracker />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
    </ApplicationContext.Provider>
  );
}

export default App;
