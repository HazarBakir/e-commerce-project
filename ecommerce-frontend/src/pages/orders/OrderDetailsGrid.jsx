import { Fragment } from "react";
import { formatDate } from "../../utils/date";

export function OrderDetailsGrid({ order, addToCart}) {
    return (<div className="order-details-grid">
        {order.products.map((orderProduct) => {
            return (
                <Fragment key={orderProduct.product.id}>
                    <div className="product-image-container">
                        <img src={orderProduct.product.image} />
                    </div>

                    <div className="product-details">
                        <div className="product-name">
                            {orderProduct.product.name}
                        </div>
                        <div className="product-delivery-date">
                            Arriving on: {formatDate(orderProduct.estimatedDeliveryTimeMs, 'MMMM D')}
                        </div>
                        <div className="product-quantity">
                            Quantity: {orderProduct.quantity}
                        </div>
                        <button className="buy-again-button button-primary"
                            onClick={() => addToCart(orderProduct.product, 1)}>
                            <img className="buy-again-icon" src="images/icons/buy-again.png" />
                            <span className="buy-again-message">Add to Cart</span>
                        </button>
                    </div>

                    <div className="product-actions">
                        <a href="/tracking">
                            <button className="track-package-button button-secondary">
                                Track package
                            </button>
                        </a>
                    </div>
                </Fragment>
            );
        })}
    </div>);
}