import React from 'react';
import { Link } from 'react-router-dom';

const EstateCard = ({ estate, onDelete }) => {
    if (!estate) return null;

    return (

        <div className="card shadow-sm h-100">
            <div className="row no-gutters">
                {/* Uncomment if you want to show the image */}
                {/* <div className="col-md-5">
                                <img 
                                    src={estate.pictureLocation} 
                                    className="card-img" 
                                    alt="Estate Image" 
                                    style={{ height: '100%', objectFit: 'cover' }} 
                                />
                            </div> */}
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title text-capitalize">{estate.type}</h5>
                        <p className="card-text mb-1"><strong>Address:</strong> {estate.address}</p>
                        <p className="card-text mb-1"><strong>Cost of Rent:</strong> ${estate.costOfRent}</p>
                        <p className="card-text mb-1"><strong>Owner:</strong> {estate.ownerId ? estate.ownerId : 'Unknown'}</p>
                        <div className="d-flex justify-content-end">
                            <Link to={`/edit/${estate.id}`} className="btn btn-sm btn-outline-primary me-2">Edit</Link>
                            <button
                                onClick={() => onDelete(estate.id)}
                                className="btn btn-sm btn-outline-danger"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateCard;
