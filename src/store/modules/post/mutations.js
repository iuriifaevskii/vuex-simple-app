export const showPosts = (state, payload) => {
    state.posts = payload;
};

export const showSinglePost = (state, payload) => {
    state.post = payload;
};

export const createPost = (state, payload) => {
    state.posts.unshift(payload);
};