import axios from "axios";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

type User = {
    name?: string;
    login?: string;
    followers?: number;
    following?: number;
    public_repos?: number;
    avatar_url?: string;
};

const initialState: User = {
    name: undefined,
    login: undefined,
    followers: undefined,
    following: undefined,
    public_repos: undefined,
    avatar_url: undefined,
};

const URL = "https://api.github.com/users/";

export const fetchUser = createAsyncThunk<
    User,
    string,
    { rejectValue: string }
>("user/fetchUser", async (nikname, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${URL}${nikname}`);
        const { name, login, followers, following, public_repos, avatar_url } =
            response.data;

        const user = {
            name,
            login,
            followers,
            following,
            public_repos,
            avatar_url,
        };

        return user;
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
            .addCase(fetchUser.pending, (state, action) => {
                console.log("Pending started");
            })
            .addCase(
                fetchUser.fulfilled,
                (state, action: PayloadAction<User>) => {
                    return action.payload;
                }
            )
            .addCase(fetchUser.rejected, (state, action) => {
                console.log("Rejected");
            });
    },
});

export default userSlice.reducer;
