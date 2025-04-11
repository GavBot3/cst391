import React from "react";
import SearchForm from './searchForm';
import AlbumList from "./albumList";

const SearchAlbum = (props) => {
    return (
        <div className="container">
            <SearchForm onSubmit={props.updateSearchResults}/>
            <AlbumList albumsList={props.albumsList} onClick={props.updateSingleAlbum}/>
        </div>
    )
}

export default SearchAlbum;