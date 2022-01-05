import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.less'
import Card from './card/Card';
import Main from './main/Main';

const App = () => {

    return (
        <BrowserRouter>
            <div className='container'>
                <Routes>
                    <Route path="/" element={<Main />} exact />
                    <Route path="/card" element={<Card />} />
                </Routes> 
            </div>
        </BrowserRouter>
    )
}

export default App;
