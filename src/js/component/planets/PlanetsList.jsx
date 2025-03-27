import React, { useContext, useEffect } from 'react';
import { Context } from '../../store/appContext';
import { Link } from 'react-router-dom';
import planetImages from './planetImages';
import FavoriteButton from '../FavoriteButton.jsx';
const PlanetsList = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPlanets();
    }, []);

    if (store.loading) {
        return <p>Cargando planetas...</p>;
    }

    if (store.error) {
        return <p>Error: {store.error.message}</p>;
    }

    return (
        <div className="container">
            <h1>Lista de Planetas de Star Wars</h1>
            <div className="row">
                {store.planets.map((planet) => (
                    <div className="col-md-4 mb-4" key={planet.url}>
                        <div className="card">
                            <img
                                src={planetImages[planet.url.split('/').pop()] || '/images/placeholder.jpg'}
                                className="card-img-top"
                                alt={planet.name}
                            />
                            <div className="card-body bg-dark">
                                <h5 className="card-title text-white">{planet.name}</h5>
                                <div className="d-flex justify-content-between">
                                <Link to={`/planet/${planet.url.split('/').pop()}`} className="btn btn-outline-warning">
                                    Ver detalles
                                </Link>
                                <FavoriteButton className  item={planet} type={"planet"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlanetsList;