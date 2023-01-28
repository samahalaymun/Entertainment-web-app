import React from 'react'
import SectionTitle from '../components/common/SectionTitle';
import SearchBar from '../components/SearchBar';

const Tv = () => {
  return (
    <main>
      <div className="container">
        <SearchBar placeHolder="Search for TV series"></SearchBar>
        <section>
          <SectionTitle className="section-title" content="TV Series" />
        </section>
      </div>
    </main>
  );
}

export default Tv
