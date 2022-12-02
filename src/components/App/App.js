import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Applications from "../Applications/Applications";
import Configs from "../Configs/Configs";
import Analysis from "../Analysis/Analysis";
import MyProfile from "../MyProfile/MyProfile";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/main" element={<Applications />} />
            <Route path="/main/apps" element={<Applications />} />
            <Route path="/main/configs" element={<Configs />} />
            <Route path="/main/analysis" element={<Analysis />} />
            <Route path="/main/mypofile" element={<MyProfile />} />
        </Routes>
    );
}

export default App;