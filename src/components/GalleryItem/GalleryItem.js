import React, { Component } from 'react';
import axios from 'axios';
import './GalleryItem.css'

class GalleryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: true
        }
    }
    likePhoto = () => {
        console.log('id:', this.props.item.id);
        console.log('likes:', this.props.item.likes);

        
        axios.put(`/gallery/like/${this.props.item.id}/${this.props.item.likes}`)
            .then(response => {
                console.log('back from PUT');
                this.props.getGallery();
            }).catch(err => {
                console.log('err:', err);
            })
    }

    handleClick = () => {
        console.log('in handleclick to show:', this.props.item.description);
        console.log('image before click:', this.state.image);
        this.state.image = !this.state.image;
        console.log('image after click:', this.state.image);
        this.forceUpdate();
    }

    render() {
        if(this.state.image) {
            return (
                <div>
                    <img onClick={this.handleClick} src={this.props.item.path} height='400' width='400' alt={this.props.item.description}/>
                    <br/>
                    <button onClick={this.likePhoto}>I like this.</button>
                    <br/><br/>
                    <p>{this.props.item.likes} like this</p>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="description" onClick={this.handleClick} >{this.props.item.description}</div>
                    <br/>
                    <button onClick={this.likePhoto}>I like this.</button>
                    <br/><br/>
                    <p>{this.props.item.likes} like this</p>
                </div>  
            )
        }
        
    }
}

export default GalleryItem;