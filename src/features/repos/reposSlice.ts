import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RepoType, QueryParamsType, ReposStateType } from "./reposTypes";
import { PAGE_SIZE, URL } from "../../constants/constants";

export const fetchRepos = createAsyncThunk<RepoType[], QueryParamsType, { rejectValue: string }>(
    "repos/fetchRepos", 
     async ({ login = '', page = 1 }, { rejectWithValue }) => {
            try {
                const response = await axios.get(
                    `${URL}/${login}/repos?per_page=${PAGE_SIZE}&page=${page}&sort=created`
                );
                const reposArray = response.data.map((item: any) => {
                    const { id, name, description, html_url } = item;
                    return { id, name, description, html_url };
                });

                return reposArray;
            } catch (e: any) {
                return rejectWithValue(e.message);
            }
});

const initialState: ReposStateType = {
    list: [],
    loading: false,
    error: false,
};

const reposSlice = createSlice({
    name: "repos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRepos.pending, (state) => {
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
            .addCase(fetchRepos.rejected, (state) => {
                state.error = true;
                state.loading = false;
            });
    },
});

export default reposSlice.reducer;
