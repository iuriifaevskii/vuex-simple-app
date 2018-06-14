import Vue from 'vue';
import Vuex from 'vuex';

import post from './modules/post/post';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        post
    }
});
