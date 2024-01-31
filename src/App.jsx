import React from 'react';
import Header from './components/header/Header';
import MoviesPage from './pages/MoviesPage';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      
      <Header />
      <MoviesPage />
		<Footer />
    </div>
  );
}

export default App;