import Vue from 'vue';
import Vuex from 'vuex';

import post from './modules/post';
import user from './modules/user';
import comment from './modules/comment';

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
        post,
        user,
        comment
    }
});
