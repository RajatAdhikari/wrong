import "./App.css"
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import SideBar from './components/Sidebar/Sidebar';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";

const App = () => {

   const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme?current_theme : 'light');

  useEffect(()=>{
    localStorage.setItem('current_theme', theme);
  },[theme])

  return (
    <>
     <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/> 
      <div className="container">
         
      <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
    </div>
    </div>
    </>
  )
}

export default App;