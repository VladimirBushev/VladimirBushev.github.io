import PhotosStyle from './Photos.module.css'
import React from 'react';

const Photos = (props) => {
    let images = []
    for (let image of props.photos.images) {
        images.push(<div className={PhotosStyle.photo}><img src={image}/></div>)
    }
    return (
        <div className={`${PhotosStyle.photos} ${PhotosStyle.div}`}>
            <a>Мои Фотографии</a>
            <div className={PhotosStyle.photosBar}>
               {images}
            </div>
        </div>
    )
}

export default Photos;