import Vue from "vue";
import { getRecPoints } from './asyncActions'
export const store = Vue.observable({
    isNavOpen: false,
    materials: {
        paper: false,
        plastic: false,
        glass: false
    },
    location: null,
    center: { lat: 32.07358, lng: 34.788052 },
    markers: [{
        position: { lat: 32.07358, lng: 34.788052 }, shape: {
            coords: [1, 1, 1, 15, 15, 15, 15, 1],
            type: 'poly'
        }, opacity: 1
    },
    {
        position: { lat: 32.08358, lng: 34.788052 }, shape: {
            coords: [10, 10, 10, 15, 15, 15, 15, 10],
            type: 'poly'
        }, opacity: 0.1
    }]
});

export const mutations = {
    changeMarkers(markers) {
        store.markers = markers
    },
    toggleNav() {
        store.isNavOpen = !store.isNavOpen
    },
    toggleMaterial(mat) {
        store.materials[mat] = !store.materials[mat]
    },
    getPoints() {
        store.markers = getRecPoints(store.materials, store.location)
    },
    geoLocate() {
        navigator.geolocation.getCurrentPosition(position => {
            this.center = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
        });
    }
}
