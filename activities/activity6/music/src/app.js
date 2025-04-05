import React, { useEffect, useState } from 'react'
// import Card from './card'
import './app.css'
// import SearchForm from './searchForm'
import NewAlbum from './newAlbum'
import OneAlbum from './oneAlbum'
import dataSource from './dataSource'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './navBar'
import SearchAlbum from './searchAlbums'

const App = props => {
  const [searchPhrase, setSearchPhrase] = useState('')
  const [albumList, setAlbumList] = useState([])
  const [currentlySelectedAlbumId, setCurrentlySelectedAlbumId] = useState(0);
  // let refresh = false;

  const updateSearchResults = phrase => {
    console.log('phrase is ' + phrase)
    setSearchPhrase(phrase)
  }

  const loadAlbums = async () => {
    const response = await dataSource.get('/albums')
    setAlbumList(response.data)
  }

  useEffect(() => {
    loadAlbums()
  }, [albumList])

  const updateSingleAlbum = (id, navigate) => {
    var index = 0;
    for (let i = 0; i < albumList.length; i++) {
      if (albumList[i].id === id) index = i;

    }
    setCurrentlySelectedAlbumId(index);
    navigate('/show/' + index);

  }

  const renderedList = albumList.filter((album) => {
    if (
      album.description.toLowerCase().includes(searchPhrase.toLowerCase()) ||
      searchPhrase === ''
    ) {
      return true
    } else {
      return false
    }

  })

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={
          <SearchAlbum
            updateSearchResults={updateSearchResults}
            albumsList={renderedList}
            updateSingleAlbum={updateSingleAlbum} />
        } />
        <Route exact path='/new' element={
          <NewAlbum />
        } />
        <Route exact path='/show/albumId'
          element={<OneAlbum album={
            albumList[currentlySelectedAlbumId]
          } />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
