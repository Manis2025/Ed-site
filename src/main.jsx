import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './componenets/Navbar.jsx'
import Body from './componenets/Body.jsx'
import Body1 from './componenets/Body1.jsx'
import Our from './componenets/Our.jsx'
import Card from './componenets/Card.jsx'
import Footer from './componenets/Footer.jsx'
import Carousels from './componenets/Carousels.jsx'
import What from './componenets/What.jsx'
import Card2 from './componenets/Card2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <Navbar />
   
      <Body/>


      <Our/>
      <Card/>
      <Body1/>
      <What/>
      <Carousels/>
      <Card2/>
     

   <Footer/>
    
  </React.StrictMode>,
)
