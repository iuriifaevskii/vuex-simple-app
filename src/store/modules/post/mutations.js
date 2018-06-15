export const showPosts = (state, payload) => {
    state.posts = payload;
};

export const createPost = (state, payload) => {
    state.posts.unshift(payload);
};