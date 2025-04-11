import React from "react";
import Card from './card';
import { useNavigate } from 'react-router-dom';

const AlbumList = (props) => {

    const handleSelectionOne = (albumId, uri) => {
        console.log('Selected ID is ' + albumId);
        props.onClick(albumId, navigator, uri);
    };

    console.log('props albumList', props)
    const navigator = useNavigate();
    const albums = props.albumsList.map((album) => {
        return (
            <Card
                key={album.id}
                albumId={album.id}
                title={album.title}
                description={album.description}
                buttonText="OK"
                imageURL={album.image}
                onClick={handleSelectionOne}
            />
        )
    })
    return (<div className="container">{albums}</div>)
}

export default AlbumList;