export const showCommentsByPost = ({ commit }, payload) => {
    fetch(`https://my-json-server.typicode.com/iuriifaevskii/my-json-server/posts/${payload}/comments`)
        .then(response => response.json())
        .then(responseJSON => {
            commit('showCommentsByPost', responseJSON);
        });
};
