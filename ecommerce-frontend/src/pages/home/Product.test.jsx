import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Product } from './Product';

const mockProduct = {
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

describe('Product Component', () => {
  it('calls addToCart with correct product and quantity when button is clicked', async () => {
    const addToCart = vi.fn();
    render(<Product product={mockProduct} addToCart={addToCart} />);
    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: /add to cart/i }));

    expect(addToCart).toHaveBeenCalledWith(mockProduct, 1);
  });
});