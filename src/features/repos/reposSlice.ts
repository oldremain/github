import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { queryParams } from "../../enums/queryParams";

// const PAGE_SIZE: number = 4;
// const PAGE = 1;

const URL = "https://api.github.com/users"; //'https://api.github.com/users/oldremain/repos'

export type RepoType = {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
};

type ReposStateType = {
    list: RepoType[];
    loading: boolean;
};

export const fetchRepos = createAsyncThunk<
    RepoType[],
    string,
    { rejectValue: string }
>("repos/fetchRepos", async (nikname, { rejectWithValue }) => {
    try {
        const response = await axios.get(
            `${URL}/${nikname}/repos?per_page=${queryParams.PAGE_SIZE}&page=${queryParams.PAGE}&sort=created`
        );
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
    loading: false,
};

const reposSlice = createSlice({
    name: "repos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRepos.pending, (state, action) => {
                console.log("Repos is pending");
                state.loading = true;
            })
            .addCase(
                fetchRepos.fulfilled,
                (state, action: PayloadAction<RepoType[]>) => {
                    state.loading = false;
                    state.list = action.payload;
                }
            )
            .addCase(fetchRepos.rejected, (state, action) => {
                console.log("Repos rejected");
            });
    },
});

export default reposSlice.reducer;
