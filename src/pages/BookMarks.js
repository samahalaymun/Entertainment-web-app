import React from 'react'
import SectionTitle from '../components/common/SectionTitle';
import SearchBar from '../components/SearchBar';

const BookMarks = () => {
  return (
    <main>
      <div className="container">
        <SearchBar placeHolder="Search for BookMarked"></SearchBar>
        <section>
          <SectionTitle className="section-title" content="BookMarked" />
        </section>
      </div>
    </main>
  );
}

export default BookMarks
