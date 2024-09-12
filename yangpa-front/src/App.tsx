import React from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import Main from "./pages/Main";
import Login from "./pages/Login";
import Testpage from "./pages/Testpage";
import Header from "./components/common/header/Header";
import Chatting from "./pages/Chatting";
import Community from "./pages/Community";

const App: React.FC = () => {
    const location = useLocation();

    return (
        <div style={{margin: 0}}>
            {location.pathname !== '/login' && <Header/>}

            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/test" element={<Testpage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/chat" element={<Chatting/>}/>
                <Route path="/community" element={<Community/>}>
                    <Route path=":community" element={<Community/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;