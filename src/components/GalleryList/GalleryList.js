import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
        return (
            <div>
                {this.props.galleryList.map((item, i) => <GalleryItem item={item} key={item.id} getGallery={this.props.getGallery} galleryList={this.props.galleryList}/>)}
            </div>
        )
    }
};


export default GalleryList;