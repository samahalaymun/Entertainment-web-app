import React, { useEffect, useState } from "react";
import SectionTitle from "../components/common/SectionTitle";
import SearchBar from "../components/SearchBar";
import trendingCardImage from "../assets/small.jpg";
import TrendingCard from "../components/TrendingCard";
import Card from "../components/Card";

const Home = () => {
 const [trending,setTrending]=useState([]);
 const [recommendations,setRecommendations]=useState([]);
 
  useEffect(() => {
    if (trending) {
      
    }
  }, [trending]);

  return (
    <main>
      <div className="container">
        <SearchBar placeHolder="Search for movies or TV series"></SearchBar>
        <section>
          <SectionTitle className="section-title" content="Trending" />
          <ul className="trending-section">
            <li>
              <Card image={trendingCardImage} className="trending-card"></Card>
            </li>
            <li>
              <Card image={trendingCardImage} className="trending-card"></Card>
            </li>
            <li>
              <Card image={trendingCardImage} className="trending-card"></Card>
            </li>
            <li>
              <Card image={trendingCardImage} className="trending-card"></Card>
            </li>
          </ul>
        </section>
        <section>
          <SectionTitle
            className="section-title"
            content="Recommended for you"
          />
          <div className="card-container">
            <Card image={trendingCardImage} className="card"></Card>
            <Card image={trendingCardImage} className="card"></Card>
            <Card image={trendingCardImage} className="card"></Card>
            <Card image={trendingCardImage} className="card"></Card>
            <Card image={trendingCardImage} className="card"></Card>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
