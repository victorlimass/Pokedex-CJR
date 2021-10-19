import React from 'react';
import Main from './pages/Main/main';
import GlobalStyle from './styles/global';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
