import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryList: []
    }
  }

  componentDidMount() {
    this.getGallery();
  }

  getGallery() {
    axios.get('/gallery')
      .then(response => {
        console.log('response:', response.data);
        this.setState({galleryList: 
          [...this.state.galleryList, ...response.data]})
          console.log('galleryList:', this.state.galleryList);
      }).catch(err => {
        console.log('err:', err);
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
      </div>
    );
  }
}

export default App;
