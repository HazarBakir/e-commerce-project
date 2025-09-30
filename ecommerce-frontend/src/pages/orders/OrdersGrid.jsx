import { OrderHeader } from "./OrderHeader";
import { OrderDetailsGrid } from "./OrderDetailsGrid";

export function OrdersGrid({ orders, addToCart}) {
    return (
        <div className="orders-grid">
            {orders.map((order) => (
                <div key={order.id} className="order-container">
                    <OrderHeader order={order} />
                    <OrderDetailsGrid order={order} addToCart={addToCart} />
                </div>
            ))}
        </div>
    );
}