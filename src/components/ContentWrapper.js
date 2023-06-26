import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import MovieTable from './MovieTable';

function ContentWrapper() {
  // Dummy data para mostrar en la tabla de películas
  const movies = [
    { id: 1, title: 'Movie 1', genre: 'Action', year: 2021 },
    { id: 2, title: 'Movie 2', genre: 'Comedy', year: 2022 },
    { id: 3, title: 'Movie 3', genre: 'Drama', year: 2023 },
  ];

  return (
    <React.Fragment>
      {/* Content Wrapper */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          <TopBar />
          <ContentRowTop />

          {/* Agrega el componente MovieTable aquí */}
          <MovieTable movies={movies} />

          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContentWrapper;
