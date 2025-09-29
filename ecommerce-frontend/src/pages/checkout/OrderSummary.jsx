import { Fragment } from "react";
import { CartItemDetails } from "./CartItemDetails";
import { DeliveryDate } from "./DeliveryDate";
import axios from "axios";

export function OrderSummary({ deliveryOptions, cart, loadCart }) {
    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map((cartItem) => {
                const selectedDeliveryOption = deliveryOptions
                    .find((deliveryOption) => {
                        return deliveryOption.id === cartItem.deliveryOptionId;
                    });

                    const deleteCartItem = async() => {
                        await axios.delete(`/api/cart-items/${cartItem.productId}`);
                        await loadCart();
                    };

                return (
                    <Fragment key={cartItem.productId}>
                        <div className="cart-item-container">
                            <DeliveryDate selectedDeliveryOption={selectedDeliveryOption} />
                            <CartItemDetails cartItem={cartItem} deliveryOptions={deliveryOptions} loadCart={loadCart} deleteCartItem={deleteCartItem} />
                        </div>
                    </Fragment>
                );
            })}
        </div>
    );
}