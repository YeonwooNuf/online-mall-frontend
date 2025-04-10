import React from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../features/productsSlice";
import { addToCart } from "../features/cartSlice";

function ProductList() {
    const products = [
        { id: 1, name: "Laptop", price: 1200 },
        { id: 2, name: "Phone", price: 800 },
    ];

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;