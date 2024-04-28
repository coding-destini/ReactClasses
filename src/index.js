import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Event from './Events/Event';
import Goal from './Conditions/Goal';
import Cars from './Conditions/Cars';
import { Garage } from './List/Garage';
import { Counter } from './State/Counter';
import Forms from './Forms/Forms';
import TaskManager from './TaskManager/TaskManager'
import { Home } from './Router-dom/Home';
import { Contact } from './Router-dom/Contact';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './Router-dom/About'

// let isGoal ;



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
);

