import React from 'react';
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import FreshStories from "../parts/FreshStories";
import TrendingPosts from "../parts/trendingPosts";
import Slider from "../parts/Slider";

const Home =() => {
    return (
        <div>
            <Header/>
            <Slider/>
            <TrendingPosts/>
            <FreshStories/>
            <Footer/>
        </div>
    );
};

export default Home;