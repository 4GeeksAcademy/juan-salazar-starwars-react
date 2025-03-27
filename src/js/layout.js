import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import PeopleList from './component/People/PeopleList'; 
import PersonDetails from './component/People/PersonDetails';
import VehiclesList from './component/vehicles/VehiclesList'; 
import VehicleDetails from './component/vehicles/VehiclesDetails';
import PlanetsList from './component/planets/PlanetsList'; 
import PlanetDetails from './component/planets/PlanetsDetails';

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/demo" element={<Demo />} />
                        <Route path="/single/:theid" element={<Single />} />
                        <Route path="*" element={<h1>Not found!</h1>} />
                        <Route path="/Peoplelist" element={<PeopleList />} />
                        <Route path="/person/:id" element={<PersonDetails />} />
                        <Route path="/VehiclesList" element={<VehiclesList />} />
                        <Route path="/vehicle/:id" element={<VehicleDetails />} /> 
                        <Route path="/PlanetsList" element={<PlanetsList/>} />
                        <Route path="/planet/:id" element={<PlanetDetails />} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);