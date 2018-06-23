import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

class GalleryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <div className="item">
                {this.props.galleryList.map((item, i) => <GalleryItem item={item} key={item.id} getGallery={this.props.getGallery} galleryList={this.props.galleryList}/>)}
            </div>
        )
    }
};


export default GalleryList;