import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
    users: [],
    loading: null,
    error: ''
};

const BASE_URL = "https://jsonplaceholder.typicode.com";
const fetchUsers = createAsyncThunk('userSlice/fetchUsers',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    async (params: any, { rejectWithValue }) => {
        try {
            const response = await fetch(`${BASE_URL}/posts`);

            if (!response.ok) {
                throw new Error();
            }

            const data = await response.json();

            return data;
        } catch (error) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return rejectWithValue(error?.message);
        }
    }
);

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
    },
    extraReducers: (builder: any) => {
        builder.addCase(fetchUsers.pending, (state: any) => {
            state.loading = true;
        }),
        builder.addCase(fetchUsers.fulfilled, (state: any, action: any) => {
            state.loading = false;
            state.users = action.payload;
            state.error = '';
        }),
        builder.addCase(fetchUsers.rejected, (state: any, action: any) => {
            state.loading = false;
            state.users = [];
            state.error = action.error.message;
        })
    }
});

export { fetchUsers };
export default userSlice.reducer;
