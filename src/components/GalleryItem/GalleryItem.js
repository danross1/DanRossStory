import React, { Component } from 'react';
import axios from 'axios';

class GalleryItem extends Component {
    likePhoto = () => {
        console.log('id:', this.props.item.id);
        
        axios.put(`/gallery/like/${this.props.item.id}`)
            .then(response => {
                console.log('back from PUT');
                this.props.getGallery();
            })
    }

    render() {
        return (
            <div>
                <img src={this.props.item.path} height='300' width='300' alt={this.props.item.description}/>
                <br/>
                <button onClick={this.likePhoto}>I like this.</button>
                <br/><br/>
                <p>{this.props.item.likes} like this</p>
            </div>
        )
    }
}

export default GalleryItem;