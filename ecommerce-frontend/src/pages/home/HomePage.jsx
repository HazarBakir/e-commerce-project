
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import './HomePage.css';
import { ProductsGrid } from './ProductGrids';
import { useSearchParams } from 'react-router-dom';


export function HomePage({ cart, loadCart, addToCart }) {
    const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search');;

    useEffect(() => {
        const getHomeData = async () => {
            if (search) {
                const response = await axios.get(`api/products?search=${search}`);
                setProducts(response.data);
            }
            else {
                const response = await axios.get('/api/products');
                setProducts(response.data);
            }
        };
        getHomeData();
    }, [search]);

    return (
        <>
            <Header cart={cart} />
            <link rel="icon" type="image/svg+xml" href="../src/assets/home-favicon.png" />
            <title>Ecommerce Project</title>
            <div className="home-page">
                <ProductsGrid products={products} loadCart={loadCart} addToCart={addToCart} />
            </div>
        </>
    );
}