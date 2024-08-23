import { configureStore } from '@reduxjs/toolkit';
import orderReducer from '../modules/order/orderSlice';
import productionReducer from '../modules/production/productionSlice';
import inventoryReducer from '../modules/inventory/inventorySlice';
import procurementReducer from '../modules/procurement/procurementSlice';
// Import other module reducers...

export const store = configureStore({
  reducer: {
    order: orderReducer,
    production: productionReducer,
    inventory: inventoryReducer,
    procurement: procurementReducer,
    // Add other reducers...
  },
});

export default store;