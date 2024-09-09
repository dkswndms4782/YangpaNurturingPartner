import React from 'react';
import {useMediaQuery} from "react-responsive";
import {Routes, Route, Link} from 'react-router-dom';
import Main from "./pages/Main";
import Login from "./pages/Login";
import Testpage from "./pages/Testpage";
import Header from "./components/common/header/Header";

const App: React.FC = () => {
    return (
        <div style={{margin: 0}}>
            <Header/>

            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/test" element={<Testpage/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>
    );
};

export default App;