import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.less'
import Card from './card/Card';
import Error from './main/Error';
import Main from './main/Main';

const App = () => {

    return (
        <BrowserRouter>
            <div className='container'>
                <Routes>
                    <Route path="/" element={<Main />} exact />
                    <Route path="/card/:username/:reponame" element={<Card />} />
                    <Route path="/error" element={<Error />} />
                    <Route path="*" element={<Main />} />
                </Routes> 
            </div>
        </BrowserRouter>
    )
}

export default App;
