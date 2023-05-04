import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const fetchUsers = createAsyncThunk('users/fetchUsers', async (page = 1) => {
    const response = await fetch(`https://reqres.in/api/users?page=${page}`);
    const data = await response.json();
    return data.data;
});

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        hoveredUser: null,
        loading: false,
        error: null,
    },
    reducers: {
        sethoveredUser(state, action) {
            state.hoveredUser = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { sethoveredUser } = userSlice.actions;
export default userSlice.reducer;
