import { Link, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import "./TrackingPage.css";
import { formatDate } from "../utils/date";

export function TrackingPage({ cart }) {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getTrackingData() {
      setLoading(true);

      const response = await window.axios.get("/api/orders?expand=products");
      const orders = response.data;

      let foundProduct = null;
      for (let order of orders) {
        const product = order.products.find((p) => p.productId === productId);
        if (product) {
          foundProduct = {
            ...product,
            orderTimeMs: order.orderTimeMs,
          };
          break;
        }
      }

      setProductData(foundProduct);
      setLoading(false);
    }

    getTrackingData();
  }, [productId]);

  let status = "Preparing";
  let progressWidth = "33%";

  if (productData) {
    const now = Date.now();
    const twoDays = 2 * 24 * 60 * 60 * 1000;

    if (now < productData.orderTimeMs + twoDays) {
      status = "Preparing";
      progressWidth = "33%";
    } else if (now < productData.estimatedDeliveryTimeMs) {
      status = "Shipped";
      progressWidth = "66%";
    } else {
      status = "Delivered";
      progressWidth = "100%";
    }
  }

  if (loading) {
    return (
      <>
        <Header cart={cart} />
        <div className="tracking-page">
          <div className="order-tracking">
            <Link className="back-to-orders-link link-primary" to="/orders">
              View all orders
            </Link>
            <div>Loading...</div>
          </div>
        </div>
      </>
    );
  }

  if (!productData) {
    return (
      <>
        <Header cart={cart} />
        <div className="tracking-page">
          <div className="order-tracking">
            <Link className="back-to-orders-link link-primary" to="/orders">
              View all orders
            </Link>
            <div>Product not found</div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header cart={cart} />
      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>

          <div className="delivery-date">
            Arriving on:{" "}
            {formatDate(productData.estimatedDeliveryTimeMs, "MMMM D")}
          </div>

          <div className="product-info">{productData.product.name}</div>

          <div className="product-info">Quantity: {productData.quantity}</div>

          <img
            className="product-image"
            src={productData.product.image}
            alt={productData.product.name}
          />

          <div className="progress-labels-container">
            <div
              className={
                status === "Preparing"
                  ? "progress-label current-status"
                  : "progress-label"
              }
            >
              Preparing
            </div>
            <div
              className={
                status === "Shipped"
                  ? "progress-label current-status"
                  : "progress-label"
              }
            >
              Shipped
            </div>
            <div
              className={
                status === "Delivered"
                  ? "progress-label current-status"
                  : "progress-label"
              }
            >
              Delivered
            </div>
          </div>

          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: progressWidth }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
