const initialState = {
    all: [],
    searchText: '',
    filtered: []
};

const blogsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;

        case 'SET_BLOGS':
            state.all = action.payload;
            state.filtered = action.payload;
            return state;

        case 'SEARCH_BLOG':
            state.searchText = action.payload;
            state.filtered = state.all.filter(blog => {
                return blog.title.toLowerCase().includes(action.payload.toLowerCase());
            });

            return state;
    }
};

export default blogsReducer;
