import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { OrderListPage } from './modules/order';
import { ProductionListPage } from './modules/production';
// Import other module pages...

const AppRoutes = () => {
    return (
        <Router>
        <Routes>
            <Route path="/orders" element={<OrderListPage />} />
            <Route path="/production" element={<ProductionListPage />} />
            {/* Add routes for other modules */}
        </Routes>
        </Router>
    );
};

export default AppRoutes;