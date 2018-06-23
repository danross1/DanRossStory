import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

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

  getGallery = () => {
    axios.get('/gallery')
      .then(response => {
        console.log('response:', response.data);
        console.log('galleryList:', this.state.galleryList);
        this.setState({ galleryList: 
          [...response.data]})
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
        <GalleryList galleryList={this.state.galleryList}
          getGallery={this.getGallery}/>
      </div>
    );
  }
}

export default App;
