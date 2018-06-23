import {API_URL} from '../../../common/constants';

export const showPosts = ({ commit }) => {
    fetch(`${API_URL}/posts`)
        .then(response => response.json())
        .then(json => {
            commit('showPosts', json);
            return json;
        });
};

export const showSinglePost = ({ dispatch, commit }, payload) => {
    return fetch(`${API_URL}/posts/${payload}`)
        .then(response => response.json())
        .then(json => {
            commit('showSinglePost', json);
            return dispatch('showCommentsByPost', payload);
        });
}

export const createPost = ({ commit }, payload) => {
    fetch(`${API_URL}/posts`, {
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
    fetch(`${API_URL}/posts/${payload.id}`, {
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