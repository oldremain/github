import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type UserType = {
    name?: string;
    login?: string;
    followers?: number;
    following?: number;
    public_repos?: number;
    avatar_url?: string;
    html_url?: string;
};

const initialState: UserType = {
    name: undefined,
    login: undefined,
    followers: undefined,
    following: undefined,
    public_repos: undefined,
    avatar_url: undefined,
    html_url: undefined,
};

const URL = "https://api.github.com/users/";

export const fetchUser = createAsyncThunk<
    UserType,
    string,
    { rejectValue: string }
>("user/fetchUser", async (nikname, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${URL}${nikname}`);
        const {
            name,
            login,
            followers,
            following,
            public_repos,
            avatar_url,
            html_url,
        } = response.data;

        const user = {
            name,
            login,
            followers,
            following,
            public_repos,
            avatar_url,
            html_url,
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
                console.log("User pending");
            })
            .addCase(
                fetchUser.fulfilled,
                (state, action: PayloadAction<UserType>) => {
                    return action.payload;
                }
            )
            .addCase(fetchUser.rejected, (state, action) => {
                console.log("User rejected");
            });
    },
});

export default userSlice.reducer;
