import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../../store/appContext';
import planetImages from './planetImages';

const PlanetDetails = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
        actions.getPlanet(id);
    }, [id]);

    if (store.loading) {
        return <p>Cargando detalles del planeta...</p>;
    }

    if (store.error) {
        return <p>Error: {store.error.message}</p>;
    }

    if (!store.planet) {
        return <p>Planeta no encontrado.</p>;
    }

    const imageUrl = planetImages[String(id)] || '/images/placeholder.jpg';

    return (
        <div className="container">
            <h1>Detalles de {store.planet.name}</h1>
            <img src={imageUrl} alt={store.planet.name} className="planet-image" onError={() => console.log('Image failed to load')} />
            <p>Periodo de rotación: {store.planet.rotation_period}</p>
            <p>Periodo orbital: {store.planet.orbital_period}</p>
            <p>Diámetro: {store.planet.diameter}</p>
            <p>Clima: {store.planet.climate}</p>
            <p>Gravedad: {store.planet.gravity}</p>
            <p>Terreno: {store.planet.terrain}</p>
            <p>Población: {store.planet.population}</p>
        </div>
    );
};

export default PlanetDetails;