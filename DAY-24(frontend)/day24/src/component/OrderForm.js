import React, { useState, useEffect } from "react";
import axios from "axios";

function OrderForm() {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");
  const [orders, setOrders] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:8080/order");
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const orderPayload = {
      status: "CREATED",
      orderLines: [
        {
          item: item,
          price: Number(price),
          quantity: Number(quantity),
        },
      ],
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/order",
        orderPayload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Created Order ID:", response.data);
      console.log("Fetched orders:", response.data);
      setMessage(`Order created successfully! ID: ${response.data}`);
      setItem("");
      setPrice("");
      fetchOrders();
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to create order");
    }
  };

  return (
    <div>
      <h2 className="title">Create Order</h2>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Enter Item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          required
        />
        <input
              type="number"
              placeholder="Enter Quantity"
              value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))} 
              min="1"
              required
            />

        <input
          type="number"
          placeholder="Enter Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
        {message && <p className="message">{message}</p>}
      </form>

      <h2 className="title">Order List</h2>
      <div className="order-list">
        {orders.length === 0 ? (
          <p className="empty">No orders found</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="order-card">
              <p>
                <strong>Order ID:</strong> {order.id}
              </p>
              {order.orderLines.map((line) => (
                <div key={line.id} className="order-line">
                  <p>Item: {line.item}</p>
                  <p>Price: ₹{line.price}</p>
                   <p>Quantity: {line.quantity}</p>  
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default OrderForm;