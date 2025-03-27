import React, { useContext, useEffect } from 'react';
import { Context } from '../../store/appContext';
import { Link } from 'react-router-dom';
import personImages from './personImages';
import FavoriteButton from '../FavoriteButton.jsx';

const PeopleList = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPeople();
    }, []);

    if (store.loading) {
        return <p>Cargando...</p>;
    }

    if (store.error) {
        return <p>Error: {store.error.message}</p>;
    }

    return (
        <div className="container">
            <h1>Lista de Personas de Star Wars</h1>
            <div className="row">
                {store.people.map((person) => (
                    <div className="col-md-4 mb-4" key={person.url}>
                        <div className="card">
                            <img
                                src={personImages[person.url.split('/').pop()] || '/images/placeholder.jpg'}
                                className="card-img-top"
                                alt={person.name}
                            />
                            <div className="card-body bg-dark">
                                <h5 className="card-title text-white">{person.name}</h5>
                                <div className="d-flex justify-content-between"> 
                                    <Link
                                        to={`/person/${person.url.split('/').pop()}`}
                                        className="btn btn-outline-warning"
                                    >
                                        Ver detalles
                                    </Link>
                                    <FavoriteButton item={person} type={"person"} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PeopleList;