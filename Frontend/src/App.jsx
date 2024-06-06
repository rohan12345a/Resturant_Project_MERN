// import React, { useState } from 'react'
// import "./App.css";
// import NavBar from './components/NavBar/NavBar';
// import Hero from './components/Hero/Hero';
// import Services from './components/Services/Services';
// import About from './components/About/About';
// import Campus from './components/Campus/Campus';
// import Testimonials from './components/Testimonials/Testimonials';
// import Contact from './components/Contact/Contact';
// import Reservation from './components/Reservation/Reservation';
// import Footer from './components/Footer/Footer';
// import Menu from './components/Menu/Menu';
// import Title from './components/Title/Title';
// import VideoPlayer from './components/VideoPlayer/VideoPlayer';
// import {ToastContainer} from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; // For toast messages




// const App = () => {
//   const [playState, setPlayState] = useState(false);

//   return (
    
//       <div>
//         <NavBar/>
//         <Hero/>
//         <Title subTitle='Our Services' title='What we offer'/>
//         <Services/>
//         <About setPlayState={setPlayState}/>
//         <Title subTitle='GALLERY' title='OUTLET PHOTOS'/>
//         <Campus/>
//         <Title subTitle='TESTIMONIALS' title='What Customers Says!'/>
//         <Testimonials/>
//         <Title subTitle='MENU' title='OUR DELICIOUS FOOD'/>
//         <Menu/>
//         <Title subTitle='MAKE RESERVATION' title='EXPERIENCE THE LUXURY'/>
//         <Reservation/>
//         <Title subTitle='Contact Us' title='Get in Touch'/>
//         <Contact/>
//         <Footer/> 
//         <VideoPlayer playState={playState} setPlayState={setPlayState}/> 
//         <ToastContainer/>
//       </div>
    
    
//   )
// }

// export default App


// App.jsx


// import React, { useState } from 'react';
// import "./App.css";
// import NavBar from './components/NavBar/NavBar';
// import Hero from './components/Hero/Hero';
// import Services from './components/Services/Services';
// import About from './components/About/About';
// import Campus from './components/Campus/Campus';
// import Testimonials from './components/Testimonials/Testimonials';
// import Contact from './components/Contact/Contact';
// import Reservation from './components/Reservation/Reservation';
// import Footer from './components/Footer/Footer';
// import Menu from './components/Menu/Menu';
// import Title from './components/Title/Title';
// import VideoPlayer from './components/VideoPlayer/VideoPlayer';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; // For toast messages

// const App = () => {
//   const [playState, setPlayState] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user's authentication status

//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true); // Update isLoggedIn state to true when login is successful
//   };

//   return (
//     <div>
//       {isLoggedIn && <NavBar />} {/* Render NavBar only when user is logged in */}
//       <Hero />
//       {isLoggedIn ? ( // Conditionally render main content based on authentication status
//         <>
//           <Title subTitle='Our Services' title='What we offer' />
//           <Services />
//           <About setPlayState={setPlayState} />
//           <Title subTitle='GALLERY' title='OUTLET PHOTOS' />
//           <Campus />
//           <Title subTitle='TESTIMONIALS' title='What Customers Says!' />
//           <Testimonials />
//           <Title subTitle='MENU' title='OUR DELICIOUS FOOD' />
//           <Menu />
//           <Title subTitle='MAKE RESERVATION' title='EXPERIENCE THE LUXURY' />
//           <Reservation />
//           <Title subTitle='Contact Us' title='Get in Touch' />
//           <Contact />
//           <Footer />
//           <VideoPlayer playState={playState} setPlayState={setPlayState} />
//           <ToastContainer />
//         </>
//       ) : (
//         <>
//           <Title subTitle='KINDLY LOG IN' title='WELCOME BACK' />
//           <Login onLoginSuccess={handleLoginSuccess} /> {/* Pass handleLoginSuccess as a prop */}
//           <Title subTitle='KINDLY SIGN IN' title='EXPERIENCE THE LUXURY' />
//           <Signup /> {/* Render Signup component if not logged in */}
//         </>
//       )}
//     </div>
//   )
// }

// export default App;


import React, { useState } from 'react';
import "./App.css";
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Reservation from './components/Reservation/Reservation';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import Title from './components/Title/Title';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // For toast messages

const App = () => {
  const [playState, setPlayState] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user's authentication status

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Update isLoggedIn state to true when login is successful
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Update isLoggedIn state to false when logging out
  };

  return (
    <div>
      {isLoggedIn && <NavBar onLogout={handleLogout} />} {/* Render NavBar only when user is logged in */}
      <Hero />
      {isLoggedIn ? ( // Conditionally render main content based on authentication status
        <>
          <Title subTitle='Our Services' title='What we offer' />
          <Services />
          <About setPlayState={setPlayState} />
          <Title subTitle='GALLERY' title='OUTLET PHOTOS' />
          <Campus />
          <Title subTitle='TESTIMONIALS' title='What Customers Says!' />
          <Testimonials />
          <Title subTitle='MENU' title='OUR DELICIOUS FOOD' />
          <Menu />
          <Title subTitle='MAKE RESERVATION' title='EXPERIENCE THE LUXURY' />
          <Reservation />
          <Title subTitle='Contact Us' title='Get in Touch' />
          <Contact />
          <Footer />
          <VideoPlayer playState={playState} setPlayState={setPlayState} />
          <ToastContainer />
        </>
      ) : (
        <>
          <Title subTitle='KINDLY LOG IN' title='WELCOME BACK' />
          <Login onLoginSuccess={handleLoginSuccess} /> {/* Pass handleLoginSuccess as a prop */}
          <Title subTitle='KINDLY SIGN IN' title='EXPERIENCE THE LUXURY' />
          <Signup /> {/* Render Signup component if not logged in */}
        </>
      )}
    </div>
  )
}

export default App;
