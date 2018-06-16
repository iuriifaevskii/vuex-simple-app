export const showUsers = ({ commit }) => {
    return fetch('https://my-json-server.typicode.com/iuriifaevskii/my-json-server/users')
        .then(response => response.json())
        .then(responseJSON => commit('showUsers', responseJSON));
};