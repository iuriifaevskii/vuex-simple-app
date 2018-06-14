const state = {
    posts: []
}

const getters = {
    posts: state => {
        return state.posts;
    }
};

const mutations = {
    showPosts: (state, payload) => {
        state.posts = payload;
    }
};

const actions = {
    showPosts: ({ commit }) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                commit('showPosts', json)
                return json;
            });
    }
};

export default {
    state,
    getters,
    mutations,
    actions
} 
    