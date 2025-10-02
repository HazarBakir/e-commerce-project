import { NavLink, useNavigate } from 'react-router';
import './Header.css';
import { useState } from 'react';

export function Header({ cart }) {
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    useNavigate();
    const updateSearchBar = (e) => {
        setSearchText(e.target.value);
        navigate(`/?search=${searchText}`);
    };

    let totalQuantity = 0;

    cart.forEach((cartItem) => {
        console.log('Cart item:', cartItem);
        totalQuantity += cartItem.quantity;
    });

    return (
        <div className="header">
            <div className="left-section">
                <NavLink to="/" className="header-link">
                    <img className="logo"
                        src="images/logo-white.png" />
                    <img className="mobile-logo"
                        src="images/mobile-logo-white.png" />
                </NavLink>
            </div>

            <div className="middle-section">
                <input className="search-bar" type="text" placeholder={searchText}
                    onClick={updateSearchBar}
                />

                <button className="search-button">
                    <img className="search-icon" src="images/icons/search-icon.png" />
                </button>
            </div>

            <div className="right-section">
                <NavLink className="orders-link header-link" to="/orders">
                    <span className="orders-text">Orders</span>
                </NavLink>

                <NavLink className="cart-link header-link" to="/checkout">
                    <img className="cart-icon" src="images/icons/cart-icon.png" />
                    <div className="cart-quantity">{totalQuantity}</div>
                    <div className="cart-text">Cart</div>
                </NavLink>
            </div>
        </div>
    );
}