import axios from "axios";
import { formatDate } from "../../utils/date";
import { formatMoney } from "../../utils/money";

export function DeliveryOptions({ deliveryOptions, cartItem, loadCart }) {
    return (
        <div className="delivery-options">
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>
            {deliveryOptions.map((deliveryOption) => {
                const updateDeliveryOption = async () => {
                    await axios.put(`/api/cart-items/${cartItem.productId}`, {
                        deliveryOptionId: deliveryOption.id
                    });
                    await loadCart();
                };

                return (
                    <div key={deliveryOption.id} className="delivery-option"
                        onClick={updateDeliveryOption}>
                        <input type="radio"
                            onChange={() => { }}
                            checked={deliveryOption.id === cartItem.deliveryOptionId}
                            className="delivery-option-input"
                            name={`delivery-option-1${cartItem.productId}`} />
                        <div>
                            <div className="delivery-option-date">
                                {formatDate(deliveryOption.estimatedDeliveryTimeMs, 'dddd, MMMM D')}
                            </div>
                            <div className="delivery-option-price">
                                {deliveryOption.priceCents === 0
                                    ? "FREE Shipping"
                                    : formatMoney(deliveryOption.priceCents
                                    )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}