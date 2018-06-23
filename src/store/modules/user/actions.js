import {API_URL} from '../../../common/constants';

export const showUsers = ({ commit }) => {
    return fetch(`${API_URL}/users`)
        .then(response => response.json())
        .then(responseJSON => commit('showUsers', responseJSON));
};