import React from 'react'
import SectionTitle from '../components/common/SectionTitle';
import SearchBar from '../components/SearchBar';

const Movies = () => {
  return (
    <main>
      <div className="container">
        <SearchBar placeHolder="Search for movies"></SearchBar>
        <section>
          <SectionTitle className="section-title" content="Movies" />
        </section>
      </div>
    </main>
  );
}

export default Movies
