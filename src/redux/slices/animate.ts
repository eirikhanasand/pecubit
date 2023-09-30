import { createSlice } from "@reduxjs/toolkit"

// Declares Animate Slice
export const AnimateSlice = createSlice({
    // Slice name
    name: "animate",
    // Initial state
    initialState: {
        // Decides if the user action should be animated
        animate: true
    },
    // Declares slice reducer
    reducers: {
        // Function to change state
        changeAnimate: (state) => {
            state.animate = !state.animate
        },
    }
})

// Exports the change function
export const { changeAnimate } = AnimateSlice.actions

// Exports the language slice
export default AnimateSlice.reducer