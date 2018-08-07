import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar/NavBar.js';
import Footer from './Footer/Footer';
import Index from './Index/Index.js';
import Blog from './Blog/Blog.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Blog />
        <Footer/>
        <Index/>
      </div>
    );
  }
}

export default App;
