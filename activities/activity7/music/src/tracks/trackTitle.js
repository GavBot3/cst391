import React from 'react';

const TrackTitle = (props) => {
    return (
        <div>
            <button onClick={() => props.onClick()} className="btn btn-primary">{props.title}</button>
        </div>

    );
}

export default TrackTitle;