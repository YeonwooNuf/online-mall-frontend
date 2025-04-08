import React from "react";
import ProductCard from "../components/ProductCard";

function Home() {
    const products = [
        { id: 1, name: "Laptop", price: 1200 },
        { id: 2, name: "Phone", price: 800 },
    ];

    return (
        <div>
            <h1>Welcome to Online Mall</h1>
            <div className="product-list">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price} />))}
            </div>
        </div>
    );
}

export default Home;