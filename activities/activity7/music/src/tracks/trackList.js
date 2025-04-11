import React from "react";
import TrackTitle from "./trackTitle";

const TrackList = (props) => {
    console.log('Received track list:', props.trackList); // Log the tracks received
    console.log('Props onClick:', props.onClick); // Log the onClick function

    const tracks = props.trackList.map((track, index) => {
        console.log('Track ID:', track.trackId); // Check if trackId is there for each track
        const trackId = track.trackId || index;  // Use index as fallback if trackId is undefined

        return (
            <TrackTitle
                key={trackId}
                title={track.title}
                onClick={() => {
                    console.log('Track clicked with id:', track.trackId); // Log the ID when the button is clicked
                    props.onClick(trackId);
                }}
            />
        );
    });

    return <div>{tracks}</div>;
};



export default TrackList;