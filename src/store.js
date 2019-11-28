import Vue from "vue";

export const store = Vue.observable({
    isNavOpen: false,
    isPaperOpen: true
});

export const mutations = {

    toggleNav() {
        store.isNavOpen = !store.isNavOpen
    },
    togglePaper() {
        store.isPaperOpen = !store.isPaperOpen
    }
}
