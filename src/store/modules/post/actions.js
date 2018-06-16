export const showPosts = ({ commit }) => {
    fetch('https://my-json-server.typicode.com/iuriifaevskii/my-json-server/posts')
        .then(response => response.json())
        .then(json => {
            commit('showPosts', json);
            return json;
        });
};

export const showSinglePost = ({ commit }, payload) => {
    fetch(`https://my-json-server.typicode.com/iuriifaevskii/my-json-server/posts/${payload}`)
        .then(response => response.json())
        .then(json => {
            commit('showSinglePost', json);
            return json;
        })
}

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

export const editPost = ({ commit }, payload) => {
    fetch(`https://my-json-server.typicode.com/iuriifaevskii/my-json-server/posts/${payload.id}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: payload.id,
            title: payload.title,
            body: payload.body,
            userId: payload.userId
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(editedPostjson => {
        commit('editPost', editedPostjson);
        return editedPostjson;
    })
};