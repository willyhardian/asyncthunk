import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
const initialState = {
    entities: [],
    isPending: false,
    errorMessage: ''
}

export const fetchUsers = createAsyncThunk(
    'users/fetch',
    async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            return response.data
        } catch (err) {
            throw new Error(err)
        }
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchUsers.pending, (state, action) => {
            // Add user to the state array
            state.isPending = true
            state.errorMessage = ''
            state.entities = []
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            // Add user to the state array
            state.isPending = false
            state.errorMessage = ''
            state.entities = [...action.payload]
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            // Add user to the state array
            console.log(action, 'di errorr')
            state.errorMessage = action.error.message
            state.entities = []
            state.isPending = false
        })
    }
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = userSlice.actions

export default userSlice.reducer