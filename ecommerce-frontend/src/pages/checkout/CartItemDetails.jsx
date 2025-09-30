import { useState } from "react";
import { formatMoney } from "../../utils/money";
import { DeliveryOptions } from "./DeliveryOptions";
import axios from "axios";

export function CartItemDetails({ cartItem, deliveryOptions, loadCart, deleteCartItem }) {
    const [updateQuantity, setUpdateQuantity] = useState(cartItem.quantity);
    const [isUpdating, setIsUpdating] = useState(false);

    const handleInputKey = (e) => {
        if (e.key === "Enter") {
            handleUpdateCartItem();
            setIsUpdating(false);
        }
        if (e.key === "Escape") {
            setIsUpdating(false);
            setUpdateQuantity(cartItem.quantity);
        }
    };

    const handleUpdateQuantity = (e) => {
        setUpdateQuantity(e.target.value);
    };
    const handleUpdateCartItem = async () => {
        handleSetUpdated();
        await axios.put(`/api/cart-items/${cartItem.productId}`, {
            quantity: Number(updateQuantity)
        });
        await loadCart();
    };

    const handleSetUpdated = () => {
        if (isUpdating == false) {
            return setIsUpdating(true);
        }
        else {
            return setIsUpdating(false);
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
                        <input
                            type="number"
                            value={updateQuantity}
                            className="cart-item-update-quantity"
                            style={{ display: isUpdating ? "inline-block" : "none" }}
                            onChange={handleUpdateQuantity}
                            onKeyDown={handleInputKey}
                        />
                        <span className="quantity-label">{cartItem.quantity}</span>
                    </span>
                    <span className="update-quantity-link link-primary"
                        onClick={handleUpdateCartItem}
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