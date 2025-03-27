import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../../store/appContext';

import vehicleImages from './vehicleImages';


const VehicleDetails = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    

    useEffect(() => {
        actions.getVehicle(id);
    }, [id]);

    if (store.loading) {
        return <p>Cargando detalles del vehículo...</p>;
    }

    if (store.error) {
        return <p>Error: {store.error.message}</p>;
    }

    if (!store.vehicle) {
        return <p>Vehículo no encontrado.</p>;
    }


    console.log("ID de VehicleDetails:", id); 


    const imageUrl = vehicleImages[id] || '/images/placeholder.jpg'; 
    return (
        <div className="container">
            <h1>Detalles de {store.vehicle.name}</h1>
           
            <img
                src={vehicleImages[id]}
                onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }} 
                alt={store.vehicle.name}
                className="vehicle-image"
            />
            <p>Modelo: {store.vehicle.model}</p>
            <p>Fabricante: {store.vehicle.manufacturer}</p>
            <p>Costo en créditos: {store.vehicle.cost_in_credits}</p>
            <p>Longitud: {store.vehicle.length}</p>
            <p>Velocidad máxima atmosférica: {store.vehicle.max_atmosphering_speed}</p>
            <p>Tripulación: {store.vehicle.crew}</p>
            <p>Pasajeros: {store.vehicle.passengers}</p>
            <p>Capacidad de carga: {store.vehicle.cargo_capacity}</p>
            <p>Consumibles: {store.vehicle.consumables}</p>
            <p>Clase de vehículo: {store.vehicle.vehicle_class}</p>
        </div>
    );
};

export default VehicleDetails;