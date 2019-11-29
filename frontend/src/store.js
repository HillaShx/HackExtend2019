import Vue from "vue";
import { getRecPoints } from './asyncActions'
import { Mock } from './temp_db'


const getMockData = () => {
    const processedMock = Mock.map(obj => (obj.recycle_point)).
        map(obj => ({ ...obj, location: obj.location.split(',') })).
        map(obj => ({ ...obj, position: { lat: parseFloat(obj.location[0]), lng: parseFloat(obj.location[1]) } }))
    return processedMock
}


const filterTypes = (marker) => {
    return (marker.category === 'bottles' && store.materials.plastic) || (marker.category === 'cardboard' && store.materials.paper) || (marker.category === 'glass' && store.materials.glass) || false
}

export const store = Vue.observable({
    isNavOpen: false,
    materials: {
        paper: false,
        plastic: false,
        glass: false
    },
    location: null,
    center: { lng: 35.00067, lat: 31.74756 },
    markers: getMockData()

    // [

    //     {
    //     position: { lat: 32.07358, lng: 34.788052 }, shape: {
    //         coords: [1, 1, 1, 15, 15, 15, 15, 1],
    //         type: 'poly'
    //     }, opacity: 1
    // },
    // {
    //     position: { lat: 32.08358, lng: 34.788052 }, shape: {
    //         coords: [10, 10, 10, 15, 15, 15, 15, 10],
    //         type: 'poly'
    //     }, opacity: 0.1
    // }]
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
        store.markers = getMockData().filter(filterTypes)
    },
    getPoints() {
        store.markers = getRecPoints(store.materials, store.location)
    },
    geoLocate() {
        navigator.geolocation.getCurrentPosition(position => {
            store.center = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
        });
    }

}

