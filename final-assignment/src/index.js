import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import SignIn from './components/Signin';
import Loading from 'react-loading';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = (username, password) => {
    
    setTimeout(() => {
      if (username === 'Himanshu' && password === '12345') {
        setIsAuthenticated(true);
        
      } 
      
    }, 500);
  };

  return (
    <>
      
     
      {isAuthenticated ? (
        <>
          <Header />
          <Body />
          <Footer />
        </>
      ) : (
        <SignIn onSignIn={handleSignIn} />
      )}
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
