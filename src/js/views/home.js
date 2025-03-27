import React from "react";
import "../../styles/home.css";
import PeopleList from '../component/People/PeopleList';
import VehiclesList from '../component/vehicles/VehiclesList';
import PlanetsList from '../component/planets/PlanetsList';

export const Home = () => {
    return (
        <div className="home-container">
            <div className="section">
                
                <div className="items">
                    <PeopleList />
                </div>
                
            </div>

            <div className="section">
                
                <div className="items">
                    <VehiclesList />
                </div>
                
            </div>


            <div className="section">
                
                <div className="items">
                    <PlanetsList />
                </div>
                
            </div>

           
        </div>
    );
};