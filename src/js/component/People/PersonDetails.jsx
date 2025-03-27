import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../../store/appContext';
import personImages from './personImages'; 
const PersonDetails = () => {

   
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
        console.log("Id del personaje:", id);
        actions.getPerson(id);
    }, [id]);

    if (store.loading) {
        return <p>Cargando detalles del personaje...</p>;
    }

    if (store.error) {
        return <p>Error: {store.error.message}</p>;
    }

    if (!store.person) {
        return <p>Personaje no encontrado.</p>;
    }

    const imageUrl = personImages[id] || '/images/placeholder.jpg'; 


    return (
        <div className="container">
            <h1>Detalles de {store.person.name}</h1>
            <img src={imageUrl} alt={store.person.name} className="person-image" />
            <p>Altura: {store.person.height}</p>
            <p>Peso: {store.person.mass}</p>
            <p>Género: {store.person.gender}</p>
        </div>
    );
};

export default PersonDetails;