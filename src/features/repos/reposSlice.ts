import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const PAGE_SIZE: number = 4;

const URL = "https://api.github.com/users"; //'https://api.github.com/users/oldremain/repos'

export type RepoType = {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
};

type ReposStateType = {
    list: RepoType[];
    page?: number;
    loading: boolean;
    error: boolean;
};

type QueryParamsType = {
    searchValue?: string;
    page?: number;
};

export const fetchRepos = createAsyncThunk<
    RepoType[],
    QueryParamsType,
    { rejectValue: string }
>("repos/fetchRepos", async ({ searchValue = '', page = 1 }, thunkApi) => {
    try {
        //await new Promise((resolve) => setTimeout(() => resolve(1), 5000));

        const response = await axios.get(
            `${URL}/${searchValue}/repos?per_page=${PAGE_SIZE}&page=${page}&sort=created`
        );
        const reposArray = response.data.map((item: any) => {
            const { id, name, description, html_url } = item;
            const repo = { id, name, description, html_url };
            return repo;
        });

        thunkApi.dispatch(setPage(page));

        return reposArray;
    } catch (e: any) {
        return thunkApi.rejectWithValue(e.message);
    }
});

const initialState: ReposStateType = {
    list: [],
    page: undefined,
    loading: false,
    error: false,
};

const reposSlice = createSlice({
    name: "repos",
    initialState,
    reducers: {
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRepos.pending, (state, action) => {
                console.log("Repos is pending", action.payload);
                state.loading = true;
                state.error = false;
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
                state.error = true;
                state.loading = false;
            });
    },
});

export const { setPage } = reposSlice.actions;

export default reposSlice.reducer;
