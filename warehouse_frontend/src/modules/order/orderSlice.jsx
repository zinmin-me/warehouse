import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orders: [],
    status: 'idle',
    error: null,
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        fetchOrdersStart(state) {
        state.status = 'loading';
        },
        fetchOrdersSuccess(state, action) {
        state.status = 'succeeded';
        state.orders = action.payload;
        },
        fetchOrdersFailure(state, action) {
        state.status = 'failed';
        state.error = action.payload;
        },
        // Other reducers...
    },
});

export const { fetchOrdersStart, fetchOrdersSuccess, fetchOrdersFailure } = orderSlice.actions;
export default orderSlice.reducer;