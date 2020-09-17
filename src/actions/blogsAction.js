export const setBlogs = payload => {
    return {
        type: 'SET_BLOGS',
        payload
    };
};

export const searchBlog = payload => {
    return {
        type: 'SEARCH_BLOG',
        payload
    };
};
