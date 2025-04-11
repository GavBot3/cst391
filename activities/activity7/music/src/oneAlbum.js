import React, { useEffect, useState } from 'react'
import TrackLyrics from './tracks/trackLyrics'
import TrackList from './tracks/trackList'
import TrackVideo from './tracks/trackVideo'

const OneAlbum = props => {
    const [trackId, setTrackId] = useState(null)

    useEffect(() => {
        if (props.album?.tracks?.length > 0) {
            setTrackId(0)
        }
    }, [props.album])

    // prevent rendering if album is not yet loaded
    if (!props.album) {
        return <p>Loading album...</p>
    }

    const onTrackClick = id => {
        console.log('Track clicked with id:', id)
        setTrackId(id)
    }

    return (
        <div className='container'>
            <h2>Album Details for {props.album.title}</h2>
            <div className='row'>
                <div className='col col-sm-3'>
                    <div className='card'>
                        <img
                            src={props.album.image}
                            className='card-img-top'
                            alt={props.album.title}
                        />
                        <div className='card-body'>
                            <h5 className='card-title'>{props.album.title}</h5>
                            <p className='card-text'>{props.album.description}</p>
                            <div className='list-group'>
                                <li>Show the album's tracks here</li>
                            </div>
                            <a href='/#' className='btn btn-primary'>
                                Edit
                            </a>
                            {Array.isArray(props.album?.tracks) && (
                                <TrackList
                                    onClick={onTrackClick}
                                    trackList={props.album.tracks}
                                />
                            )}
                        </div>
                    </div>
                </div>
                {trackId !== null && (
                    <div className='col col-sm-9'>
                        <div className='card'>
                            <TrackLyrics lyrics={props.album.tracks[trackId]?.lyrics} />
                        </div>

                        <div className='card'>
                            <TrackVideo videoUrl={props.album.tracks[trackId]?.video} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default OneAlbum
