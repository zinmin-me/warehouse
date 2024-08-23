import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    fetchOrdersStart,
    fetchOrdersSuccess,
    fetchOrdersFailure,
} from "../orderSlice";
import OrderTable from "../components/OrderTable";
import axios from "axios";

const OrderListPage = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.order.orders);
    const status = useSelector((state) => state.order.status);

    useEffect(() => {
    const fetchOrders = async () => {
        dispatch(fetchOrdersStart());
        try {
            const response = await axios.get("/api/orders");
            dispatch(fetchOrdersSuccess(response.data));
        } catch (error) {
            dispatch(fetchOrdersFailure(error.message));
        }
    };

    fetchOrders();
    }, [dispatch]);

    return (
        <div>
            <h1>Order List</h1>
            {status === "loading" && <p>Loading...</p>}
            {status === "succeeded" && <OrderTable orders={orders} />}
            {status === "failed" && <p>Error loading orders</p>}
        </div>
    );
};

export default OrderListPage;
