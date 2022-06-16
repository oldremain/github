import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import reposSlice from "../features/repos/reposSlice";
import themeSlice from "../features/theme/themeSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        repos: reposSlice,
        theme: themeSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
