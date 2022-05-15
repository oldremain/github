import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserType, UserStateType } from "./userTypes";
import { URL } from '../../constants/constants'

const initialState: UserStateType = {
    user: {public_repos: 0, followers: 0, following: 0},
    loading: false,
    error: false,
};

export const fetchUser = createAsyncThunk<UserType, string, { rejectValue: string }>(
    "user/fetchUser", 
     async (nickname, { rejectWithValue }) => {
        try {
            await new Promise((resolve) => setTimeout(() => resolve(1), 3000));
            const response = await axios.get(`${URL}/${nickname}`);
            const {name, login, followers, following, public_repos, avatar_url, html_url} = response.data;

            return { name, login, followers, following, public_repos, avatar_url, html_url }
    } catch (e: any) {
        return rejectWithValue(e.message);
    }
});

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(
                fetchUser.fulfilled,
                (state, action: PayloadAction<UserType>) => {
                    state.loading = false;
                    state.user = action.payload;
                }
            )
            .addCase(fetchUser.rejected, (state) => {
                state.loading = false;
                state.error = true;
            });
    },
});

export default userSlice.reducer;
