import React, { useContext, useEffect } from 'react';
import { Context } from '../../store/appContext';
import { Link } from 'react-router-dom';
import vehicleImages from './vehicleImages';
import FavoriteButton from '../FavoriteButton.jsx';

const VehiclesList = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getVehicles();
    }, []);

    if (store.loading) {
        return <p>Cargando vehículos...</p>;
    }

    if (store.error) {
        return <p>Error: {store.error.message}</p>;
    }

    return (
        <div className="container">
            <h1>Lista de Vehículos de Star Wars</h1>
            <div className="row">
                {store.vehicles.map((vehicle) => (
                    <div className="col-md-4 mb-4" key={vehicle.url}>
                        <div className="card">
                            <img
                                src={vehicleImages[vehicle.url.split('/').pop()]}
                                onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }}
                                className="card-img-top"
                                alt={vehicle.name}
                            />
                            <div className="card-body bg-dark">
                                <h5 className="card-title text-white">{vehicle.name}</h5>
                                <div className="d-flex justify-content-between">
                                <Link to={`/vehicle/${vehicle.url.split('/').pop()}`} className="btn btn-outline-warning">
                                    Ver detalles
                                </Link>
                                <FavoriteButton item={vehicle} type={"vehicle"} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VehiclesList;