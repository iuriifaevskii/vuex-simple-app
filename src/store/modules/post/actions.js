export const showPosts = ({ commit }) => {
    fetch('https://my-json-server.typicode.com/iuriifaevskii/my-json-server/posts')
        .then(response => response.json())
        .then(json => {
            commit('showPosts', json)
            return json;
        });
};

export const createPost = ({ commit }, payload) => {
    fetch('https://my-json-server.typicode.com/iuriifaevskii/my-json-server/posts', {
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
};