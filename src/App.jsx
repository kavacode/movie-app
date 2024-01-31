import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import MoviesPage from "./pages/MoviesPage";
import FavoritesPage from "./pages/FavoritesPage";
import SearchPage from "./pages/SearchPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/footer/Footer";
import { AppContainer, MainContent, SidebarContainer } from "./AppStyles";

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <MainContent>
          <SidebarContainer>
            <Sidebar />
          </SidebarContainer>
          <Routes>
            <Route path="/*" element={<NotFoundPage />} />
            <Route path="/" element={<MoviesPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/movie/:imdbID" element={<MovieDetailsPage />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
