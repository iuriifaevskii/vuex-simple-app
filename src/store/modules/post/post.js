const state = {
    posts: []
};

const getters = {
    posts: state => {
        return state.posts;
    }
};

const mutations = {
    showPosts: (state, payload) => {
        state.posts = payload;
    },
    createPost: (state, payload) => {
        state.posts.unshift(payload);
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
    },
    createPost: ({ commit }, payload) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(json => {
            commit('createPost', {
                title: payload.title,
                id: json.id,
                body: payload.body,
                userId: payload.userId
            })
            return json;
        });
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};