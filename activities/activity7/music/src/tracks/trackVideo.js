import React from 'react';

const TrackVideo = (props) => {
    return (
        <div className='container'>
            <iframe
                width="560"
                height="315"
                src={props.videoUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
        </div>

    );
}

export default TrackVideo;