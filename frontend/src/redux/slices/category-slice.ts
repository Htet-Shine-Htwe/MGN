import { ComicCategory } from "@/pages/admin/Category/type";
import { createSlice } from "@reduxjs/toolkit";


interface Categories {
    categories?: null | ComicCategory[],
}

const initialState: Categories = {
    categories: null,
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setCategories(state, action) {
            state.categories = action.payload;
        },
    }
});

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;

export const selectCategories = (state: { categories: ComicCategory[] }) => state.categories;