import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import './HomePage.css';
import { ProductsGrid } from './ProductGrids';


export function HomePage({ cart, loadCart }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getHomeData = async () => {
            const response = await axios.get('/api/products');
            setProducts(response.data);
        };
        getHomeData();
    }, []);

    return (
        <>
            <Header cart={cart} />
            <link rel="icon" type="image/svg+xml" href="../src/assets/home-favicon.png" />
            <title>Ecommerce Project</title>
            <div className="home-page">
                <ProductsGrid products={products} loadCart={loadCart} />
            </div>
        </>
    );
}