import {API_URL} from '../../../common/constants';

export const showCommentsByPost = ({ commit }, payload) => {
    return fetch(`${API_URL}/posts/${payload}/comments`)
        .then(response => response.json())
        .then(responseJSON => {
            commit('showCommentsByPost', responseJSON);
        });
};
