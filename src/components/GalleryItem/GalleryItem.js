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
                // console.log('back from PUT');
                this.props.getGallery();
            }).catch(err => {
                console.log('err:', err);
            })
    }

    handleClick = () => {
        this.setState({image: !this.state.image});
    }

    render() {
        let data;

        if(this.state.image) {
            data = <img onClick={this.handleClick} src={this.props.item.path} height='400' width='400' alt={this.props.item.description}/>;
        } else {
            data = <div className="description" onClick={this.handleClick} >{this.props.item.description}</div>;
        }

        return (
            <div>
                {data}
                <br/>
                <button onClick={this.likePhoto}>I like this.</button>
                <br/><br/>
                <p>{this.props.item.likes} like this</p>
            </div>  
        )
        
    }
}

export default GalleryItem;