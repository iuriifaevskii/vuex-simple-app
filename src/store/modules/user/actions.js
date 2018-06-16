export const showUsers = ({ commit }) => {
    fetch('https://my-json-server.typicode.com/iuriifaevskii/my-json-server/users')
        .then(response => response.json())
        .then(responseJSON => {
            commit('showUsers', responseJSON);
        });
};