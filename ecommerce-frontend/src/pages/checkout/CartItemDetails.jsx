import { useState } from "react";
import { formatMoney } from "../../utils/money";
import { DeliveryOptions } from "./DeliveryOptions";

export function CartItemDetails({ cartItem, deliveryOptions, loadCart, deleteCartItem }) {
    const [updated, setUpdated] = useState(false);

    const handleSetUpdated = () => {
        if (updated == false) {
            setUpdated(true);
        }
        else {
            setUpdated(false);
        }
    };

    return (
        <div className="cart-item-details-grid">
            <img className="product-image"
                src={cartItem.product.image} />

            <div className="cart-item-details">
                <div className="product-name">
                    {cartItem.product.name}
                </div>
                <div className="product-price">
                    {formatMoney(cartItem.product.priceCents)}
                </div>
                <div className="product-quantity">
                    <span>
                        Quantity:
                        <input type="text" className="cart-item-update-quantity" style={{ display: updated ? "inline-block" : "none" }} />

                        <span className="quantity-label">{cartItem.quantity}</span>
                    </span>
                    <span className="update-quantity-link link-primary"
                        onClick={handleSetUpdated}
                    >
                        Update
                    </span>
                    <span className="delete-quantity-link link-primary"
                        onClick={deleteCartItem}>
                        Delete
                    </span>
                </div>
            </div>

            <DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem} loadCart={loadCart} />
        </div>
    );
}