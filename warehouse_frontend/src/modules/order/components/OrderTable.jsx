import React from "react";

const OrderTable = ({ orders }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Order Number</th>
          <th>Customer Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td>{order.orderNumber}</td>
            <td>{order.customerName}</td>
            <td>{order.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderTable;
