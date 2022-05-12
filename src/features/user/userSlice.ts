import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type UserType = {
    name: string;
    login: string;
    followers: number;
    following: number;
    public_repos: number;
    avatar_url: string;
    html_url: string;
};

type userStateType = {
    user: UserType;
    loading: boolean;
};

const initialState: userStateType = {
    user: {
        name: "",
        login: "",
        followers: 0,
        following: 0,
        public_repos: 0,
        avatar_url: "",
        html_url: "",
    },
    loading: false,
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
                state.loading = true;
            })
            .addCase(
                fetchUser.fulfilled,
                (state, action: PayloadAction<UserType>) => {
                    state.loading = false;
                    state.user = action.payload;
                }
            )
            .addCase(fetchUser.rejected, (state, action) => {
                console.log("User rejected");
            });
    },
});

export default userSlice.reducer;
