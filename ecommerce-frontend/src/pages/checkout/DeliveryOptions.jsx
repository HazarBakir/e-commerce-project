import { formatDate } from "../../utils/date";
import { formatMoney } from "../../utils/money";

export function DeliveryOptions({ deliveryOptions, cartItem }) {
    return (
        <div className="delivery-options">
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>
            {deliveryOptions.map((deliveryOption) => {
                return (
                    <div key={deliveryOption.id} className="delivery-option">
                        <input type="radio"
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