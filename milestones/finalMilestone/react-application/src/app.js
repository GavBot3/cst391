import React, { useEffect, useState } from 'react';
import dataSource from './dataSource';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import NavBar from './navBar';
import ListEstate from './estates/listEstates';
import EditEstate from './estates/editEstate';

const App = () => {
    const [estatesList, setEstatesList] = useState([]);

    const loadEstates = async () => {
        const response = await dataSource.get('/estates');
        setEstatesList(response.data);
    };

    useEffect(() => {
        loadEstates();
    }, []);

    const handleDelete = async (id) => {
        await dataSource.delete(`/estates/${id}`);
        setEstatesList(prev => prev.filter(e => e.id !== id));
    };

    const onEditEstate = (navigate) => {
        loadEstates();
        navigate("/");
    };

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route
                    path="/estates"
                    element={
                        <ListEstate
                            estates={estatesList}
                            onDelete={handleDelete}
                        />
                    }
                />
                <Route
                    path="/new"
                    element={
                        <EditEstate
                            onEditEstate={onEditEstate}
                        />
                    }
                />
                <Route
                    path="/edit/:estateId"
                    element={
                        <EditEstate
                            estatesList={estatesList}
                            onEditEstate={onEditEstate}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
