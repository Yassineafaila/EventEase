import React from 'react';
import {Routes,Route} from 'react-router-dom'
import './App.css';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/home/HomePage';
import  EventPage from './pages/event/EventPage';
import SpeakerPage from './pages/speaker/SpeakerPage';
import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';
import FAQPage from './pages/faq/FAQPage';
import SigninPage from './pages/signin/SigninPage';
import SignupPage from './pages/signup/SignupPage';

function App(): JSX.Element {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/events' element={<EventPage />} />
          <Route path='/speakers' element={<SpeakerPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/faq' element={<FAQPage />} />
          <Route path='/signin' element={<SigninPage />} />
          <Route path='/signup' element={<SignupPage/>}/>
        </Routes>
        
      </MainLayout></>
  );
}

export default App;
