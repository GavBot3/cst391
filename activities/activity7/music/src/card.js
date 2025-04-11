import React from 'react'

const Card = (props) => {

    const handleButtonClick = (event, uri) => {
        props.onClick(props.albumId, uri);
    }


    return (
        <div className='card' style={{ width: '18rem' }}>
            <img src={props.imageURL} className='card-img-top' alt='...' />
            <div className='card-body'>
                <h5 className='card-title'>{props.title}</h5>
                <p className='card-text'>{props.description}</p>
                <button
                    className='btn btn-primary'
                    onClick={() => handleButtonClick(props.albumId, '/show/')}
                >
                    {props.buttonText}
                </button>

                <button
                    className='btn btn-primary'
                    onClick={() => handleButtonClick(props.albumId, '/edit/')}
                >
                    Edit
                </button>
            </div>
        </div>
    )
}

export default Card
