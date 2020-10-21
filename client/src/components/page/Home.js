import React, { Component } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import _ from 'lodash';
import axios from 'axios';
import NYTimesCards from '../ny_times';
import SortButton from '../SortButton';
import loader from "../loader/book-shelf-loader.gif";

class Home extends Component {
  state = {
    articles: [],
    genres: [],
    selectedGenre: "all",
    isLoaded: false
  }

  async componentDidMount() {
    const { data } = await axios.get(process.env.REACT_APP_NY_TIMES_ACCESS_KEY);;
    const genres = this.createSet(data.results);
    this.setState({ articles: data.results, genres, isLoaded: true });
  }

  createSet(articles) {
    let array = [];
    articles.map(a => array.push(a.section));
    const newArray = ['all', ...array]
    return _.uniq(newArray);
  }

  handleSection = set => {
    set.persist();
    this.setState({ selectedGenre: set.target.textContent });
  }

  render() {
    const { articles, genres, selectedGenre, isLoaded } = this.state;

    const newsArticles = selectedGenre !== "all" ? articles.filter(a => a.section === selectedGenre) : articles;

    return (
      <React.Fragment>
        {isLoaded && <HeroSection />}
        {isLoaded && <SortButton genres={genres} onClick={this.handleSection} />}
        {isLoaded ?
          <NYTimesCards articles={newsArticles} /> : <img className="loader" alt="image" src={loader}></img>}
        {isLoaded && <Footer />}
      </React.Fragment>
    )
  }
}

export default Home;


