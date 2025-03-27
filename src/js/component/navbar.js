import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-light mb-3 ">
            <Link to="/">
                <img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" alt="Inicio" style={{ height: '80px', marginLeft: '20px' }} />
            </Link>

            <div className="person">
                <Link to="/peoplelist" style={{ textDecoration: 'none' }}>
                    <p className="text-light fs-2 fw-bold">Personas</p>
                </Link>
            </div>

            <div className="vehicles">
                <Link to="/vehicleslist" style={{ textDecoration: 'none' }}>
                    <p className="text-light fs-2 fw-bold">Vehiculos</p>
                </Link>
            </div>

            <div className="planets">
                <Link to="/planetslist" style={{ textDecoration: 'none' }}>
                    <p className="text-light fs-2 fw-bold">Planetas</p>
                </Link>
            </div>

            <div className="favorites">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Favoritos ({store.favorites.length})
                    </button>

                    <div className="dropdown-menu " aria-labelledby="dropdownMenuButton">
                        {store.favorites.map((item) => (
                            <div key={item.url} className="dropdown-item d-flex align-items-center"style={{ gap: '1rem' }}>
                                
                                
                                    {item.name} 
                                
                               <div className="d-flex justify-content-between">
                                <button
                                    onClick={() => actions.removeFromFavorites(item.url)}
                                    className="btn btn-sm btn-danger  "
                                >
                                    <FontAwesomeIcon icon={faTrash} /> 
                                </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};