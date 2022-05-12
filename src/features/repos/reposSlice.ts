import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://api.github.com/users"; //'https://api.github.com/users/oldremain/repos'

export type RepoType = {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
};

type ReposStateType = {
    list: RepoType[];
};

export const fetchRepos = createAsyncThunk<
    RepoType[],
    string,
    { rejectValue: string }
>("repos/fetchRepos", async (nikname, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${URL}/${nikname}/repos`);
        const reposArray = response.data.map((item: any) => {
            const { id, name, description, html_url } = item;
            const repo = { id, name, description, html_url };
            return repo;
        });

        return reposArray;
    } catch (e: any) {
        return rejectWithValue(e.message);
    }
});

const initialState: ReposStateType = {
    list: [],
    // name: undefined,
    // description: null,
    // html_url: undefined,
};

const reposSlice = createSlice({
    name: "repos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRepos.pending, (state, action) => {
                console.log("Repos is pending");
            })
            .addCase(
                fetchRepos.fulfilled,
                (state, action: PayloadAction<RepoType[]>) => {
                    state.list = action.payload;
                }
            )
            .addCase(fetchRepos.rejected, (state, action) => {
                console.log("Repos rejected");
            });
    },
});

export default reposSlice.reducer;
