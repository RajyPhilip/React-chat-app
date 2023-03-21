import React from 'react' ;
import { Routes, Route } from 'react-router-dom';
import LeftView from '../components/leftBar/leftBar';
import RightView from '../components/rightBar/rightBar';

import './chat.css'

const Chat = () => {
  
  return (
    <div className='chat'>
    <LeftView />
    <Routes>
      <Route path='/' element={<RightView/>} />
      <Route path='/chat/:id' element={<RightView />} />
    </Routes>
    </div>
  )
}

export default Chat
