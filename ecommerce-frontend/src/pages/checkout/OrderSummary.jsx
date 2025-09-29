import { formatDate } from "../../utils/date";
import { CartItemDetails } from "./CartItemDetails";
import { DeliveryOptions } from "./DeliveryOptions";

export function OrderSummary({ deliveryOptions, cart }) {
    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map((cartItem) => {
                const selectedDeliveryOption = deliveryOptions
                    .find((deliveryOption) => {
                        return deliveryOption.id === cartItem.deliveryOptionId;
                    });
                return (
                    <>
                        <div key={cartItem.productId} className="cart-item-container">
                            <div className="delivery-date">
                                Delivery date: {formatDate(selectedDeliveryOption.estimatedDeliveryTimeMs, 'dddd, MMMM D')}

                            </div>

                            <CartItemDetails cartItem={cartItem} deliveryOptions={deliveryOptions}/>
                        </div>
                    </>
                );
            })}
        </div>
    );
}