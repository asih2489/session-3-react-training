import React from "react";
import { Link, useRouteMatch, useLocation } from "react-router-dom";

const orders = [
  { id: "111", orderNo: "no111", name: "Order 111" },
  { id: "222", orderNo: "no222", name: "Order 222" },
  { id: "333", orderNo: "no333", name: "Order 333" },
  { id: "444", orderNo: "no444", name: "Order 444" },
  { id: "555", orderNo: "no555", name: "Order 555" }
];

export default function OrderByQueryParam() {
  let query = new URLSearchParams(useLocation().search);
  let isQueryExist = query && query.get("orderNo");
  return (
    <div style={{ border: "1px solid red", padding: 12 }}>
      {!isQueryExist && (
        <OrderList />
      )}
      {isQueryExist && (
        <OrderItem />
      )}
    </div>
  );
}

function OrderList() {
  let { url } = useRouteMatch();
  return (
    <>
      <h3>Order List for OrderByQueryParam</h3>
      <ul>
        {orders.map(order => (
          <li>
            <Link to={`${url}?orderNo=${order.orderNo}`}>{order.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

function OrderItem() {
  let query = new URLSearchParams(useLocation().search);
  return (
    <div>
      <h3>Order Item</h3>
      <div>queryParam: {query.get("orderNo")}</div>
    </div>
  )
}
