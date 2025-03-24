import React from 'react';

const Card = (props) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={props.imageURL} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#PLACE" className="btn btn-primary">{props.buttonText}</a>
            </div>
        </div>

    );
}

export default Card;