import { api, api_key } from ".";

export const fetchOrders = async () => {
    const response = await api.get(`api/orders?api_key=${api_key}`);
    return response.data;
};