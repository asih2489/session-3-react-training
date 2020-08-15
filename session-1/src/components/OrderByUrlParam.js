import React from "react";
import { Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";

const orders = [
  { id: "111", orderNo: "no111", name: "Order 111" },
  { id: "222", orderNo: "no222", name: "Order 222" },
  { id: "333", orderNo: "no333", name: "Order 333" },
  { id: "444", orderNo: "no444", name: "Order 444" },
  { id: "555", orderNo: "no555", name: "Order 555" }
];

export default function OrderByUrlParam() {
  let { path } = useRouteMatch();
  return (
    <div style={{ border: "1px solid red", padding: 12 }}>
      <Switch>
        <Route exact path={path}>
          <OrderList />
        </Route>
        <Route path={`${path}/:orderId`}>
          <OrderItem />
        </Route>
      </Switch>
    </div>
  );
}

function OrderList() {
  let { url } = useRouteMatch();
  return (
    <>
      <h3>Order List for OrderByUrlParam</h3>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            <Link to={`${url}/${order.id}`}>{order.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

function OrderItem() {
  let { orderId } = useParams();
  return (
    <div>
      <h3>Order Item</h3>
      <div>urlParam: {orderId}</div>
    </div>
  );
}
