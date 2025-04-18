import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import dataSource from '../dataSource';

function EditEstate({ estatesList, onEditEstate }) {
    let params = useParams();
    const { estateId } = params; 
    console.log("EditEstate rendered with estateId:", estateId);

    const isNew = !estateId;

    const [estate, setEstate] = useState({
        type: '',
        address: '',
        costOfRent: '',
        ownerId: '',
        pictureLocation: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (estateId) {
            const selectedEstate = estatesList.find(e => e.id === Number(estateId));
            if (selectedEstate) {
                setEstate(selectedEstate);
            }
        }
    }, [estateId, estatesList]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedEstate = {
            id: estate.id,
            type: estate.type,
            address: estate.address,
            costOfRent: Number(estate.costOfRent),
            ownerId: Number(estate.ownerId),
            pictureLocation: estate.pictureLocation,
        };

        const response = isNew
            ? await dataSource.post('/estates', updatedEstate)
            : await dataSource.put(`/estates`, updatedEstate);

        console.log(response.data);
        onEditEstate?.(navigate);
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>{isNew ? 'Create New Estate' : 'Edit Estate'}</h1>
                <div className="form-group">
                    <label>Type</label>
                    <input
                        type="text"
                        className="form-control"
                        value={estate.type}
                        onChange={(e) => setEstate({ ...estate, type: e.target.value })}
                    />
                    <label>Address</label>
                    <input
                        type="text"
                        className="form-control"
                        value={estate.address}
                        onChange={(e) => setEstate({ ...estate, address: e.target.value })}
                    />
                    <label>Cost of Rent</label>
                    <input
                        type="number"
                        className="form-control"
                        value={estate.costOfRent}
                        onChange={(e) => setEstate({ ...estate, costOfRent: e.target.value })}
                    />
                    <label>Owner ID</label>
                    <input
                        type="number"
                        className="form-control"
                        value={estate.ownerId}
                        onChange={(e) => setEstate({ ...estate, ownerId: e.target.value })}
                    />
                    <label>Picture Location (URL)</label>
                    <input
                        type="text"
                        className="form-control"
                        value={estate.pictureLocation}
                        onChange={(e) => setEstate({ ...estate, pictureLocation: e.target.value })}
                    />
                </div>
                <div className="text-center mt-3">
                    <button type="button" className="btn btn-light me-2" onClick={handleCancel}>Cancel</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default EditEstate;
