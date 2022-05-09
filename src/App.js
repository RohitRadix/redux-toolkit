import React from "react";
import { Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import Employees from "./components/Employees";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import UserList from "./components/UserList";
function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/counter'} element={<Counter/>}/>
        <Route path={'/user'} element={<UserList/>}/>
        <Route path={'/employees'} element={<Employees/>}/>
      </Routes>
     
    </React.Fragment>
   
  );
}

export default App;
