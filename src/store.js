import Vue from "vue";

export const store = Vue.observable({
    isNavOpen: false,
    materials: {
        paper: false,
        plastic: false,
        glass: false
    }
});

export const mutations = {

    toggleNav() {
        store.isNavOpen = !store.isNavOpen
    },
    toggleMaterial(mat) {
        store.materials[mat] = !store.materials[mat]
    }
}
