import { formatDate } from "../../utils/date";

export function DeliveryDate({selectedDeliveryOption}) {
    return (
        <div className="delivery-date">
            Delivery date: {formatDate(selectedDeliveryOption.estimatedDeliveryTimeMs, 'dddd, MMMM D')}
        </div>
    );
}