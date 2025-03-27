const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: [],
            person: null,
            vehicles: [],
            vehicle: null,
            favorites: [],
            loading: false,
            error: null,
            planets: [], 
            planet: null, 
        },
        actions: {
            getPeople: async () => {
                setStore({ loading: true, error: null });
                try {
                    const response = await fetch('https://www.swapi.tech/api/people/');
                    if (!response.ok) {
                        throw new Error('Error al obtener la lista de personas');
                    }
                    const data = await response.json();
                    setStore({ people: data.results });
                } catch (err) {
                    setStore({ error: err.message });
                } finally {
                    setStore({ loading: false });
                }
            },
            getPerson: async (id) => {
                setStore({ loading: true, error: null });
                try {
                    const response = await fetch(`https://www.swapi.tech/api/people/${id}/`);
                    console.log("Respuesta de la API:", response);
                    if (!response.ok) {
                        if (response.status === 404) {
                            throw new Error(`Personaje con ID ${id} no encontrado`);
                        }
                        throw new Error(`Error al obtener los detalles del personaje con ID ${id}`);
                    }
                    const data = await response.json();
                    setStore({ person: data.result.properties });
                } catch (err) {
                    setStore({ error: err.message });
                } finally {
                    setStore({ loading: false });
                }
            },
            getVehicles: async () => {
                setStore({ loading: true, error: null });
                try {
                    const response = await fetch('https://www.swapi.tech/api/vehicles/');
                    if (!response.ok) {
                        throw new Error('Error al obtener la lista de vehículos');
                    }
                    const data = await response.json();
                    setStore({ vehicles: data.results });
                } catch (err) {
                    setStore({ error: err.message });
                } finally {
                    setStore({ loading: false });
                }
            },
            getVehicle: async (id) => {
                setStore({ loading: true, error: null });
                try {
                    const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}/`);
                    if (!response.ok) {
                        if (response.status === 404) {
                            throw new Error(`Vehículo con ID ${id} no encontrado`);
                        }
                        throw new Error(`Error al obtener los detalles del vehículo con ID ${id}`);
                    }
                    const data = await response.json();
                    setStore({ vehicle: data.result.properties });
                } catch (err) {
                    setStore({ error: err.message });
                } finally {
                    setStore({ loading: false });
                }
            },
            addToFavorites: (item, type) => {
                const store = getStore();
                setStore({ favorites: [...store.favorites, { ...item, type }] });
            },
            removeFromFavorites: (itemUrl) => {
                const store = getStore();
                const updatedFavorites = store.favorites.filter(favItem => favItem.url !== itemUrl);
                setStore({ favorites: updatedFavorites });
            },
            changeColor: (index, color) => {
                
            },
            loadSomeData: () => {
                
            },
            getPlanets: async () => { 
                setStore({ loading: true, error: null });
                try {
                    const response = await fetch('https://www.swapi.tech/api/planets/');
                    if (!response.ok) {
                        throw new Error('Error al obtener la lista de planetas');
                    }
                    const data = await response.json();
                    setStore({ planets: data.results });
                } catch (err) {
                    setStore({ error: err.message });
                } finally {
                    setStore({ loading: false });
                }
            },
            getPlanet: async (id) => { 
                setStore({ loading: true, error: null });
                try {
                    const response = await fetch(`https://www.swapi.tech/api/planets/${id}/`);
                    if (!response.ok) {
                        if (response.status === 404) {
                            throw new Error(`Planeta con ID ${id} no encontrado`);
                        }
                        throw new Error(`Error al obtener los detalles del planeta con ID ${id}`);
                    }
                    const data = await response.json();
                    setStore({ planet: data.result.properties });
                } catch (err) {
                    setStore({ error: err.message });
                } finally {
                    setStore({ loading: false });
                }
            },
        },
    };
};

export default getState;