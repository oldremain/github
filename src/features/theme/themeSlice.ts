import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
    theme: string
}

const initialState: initialStateType = {
    theme: localStorage.getItem('theme') || ''
}

const toggleThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme(state) {
            state.theme = (state.theme === 'dark') ? 'light' : 'dark'
            document.body.dataset.theme = state.theme 
            
            localStorage.setItem('theme', state.theme)
        }
    }
})

export const { toggleTheme } = toggleThemeSlice.actions

export default toggleThemeSlice.reducer