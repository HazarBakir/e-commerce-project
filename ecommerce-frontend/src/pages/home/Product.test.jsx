import { it, expect, describe, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Product } from './Product';

// no external requests in component; we assert the addToCart callback


describe('Product Component', () => {

    it('adds the product to the cart', async () => {
        const product = {
            id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            image: "images/products/athletic-cotton-socks-6-pairs.jpg",
            name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
            rating: {
                stars: 4.5,
                count: 87
            },
            priceCents: 1090,
            keywords: ["socks", "sports", "apparel"]
        };

        const addToCart = vi.fn();

        render(<Product product={product} addToCart={addToCart} />);

        const user = userEvent.setup();
        const addToCartButton = screen.getByRole('button', { name: /add to cart/i });
        await user.click(addToCartButton);

        expect(addToCart).toHaveBeenCalledWith(product, 1);
    });
});