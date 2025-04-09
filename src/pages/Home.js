import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Home() {
    // const products = [
    //     { id: 1, name: "Laptop", price: 1200 },
    //     { id: 2, name: "Phone", price: 800 },
    // ];

    const [products, setProducts] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    // useEffect(() => {
    //     // 예제: API 호출 대신 하드코딩 데이터 사용
    //     const fetchProducts = () => {
    //         const data = [
    //             { id: 1, name: "Laptop", price: 1200},
    //             { id: 2, name: "Phone", price: 800},
    //             { id: 3, name: "Tablet", price: 400}
    //         ];
    //         setProducts(data);
    //     };
    //     fetchProducts();
    // },[]);  // 빈 배열로 마운트 시 한 번만 실행

    useEffect(() => {
        // Spring Boot API에서 데이터 가져오기
        fetch("http://localhost:8080/api/products")     // fetch 쓰면 기본적으로 GET 방식
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    function handleAddToCart() {
        setCartCount(cartCount + 1);
    }

    return (
        <div>
            <h1>Welcome to Online Mall</h1>
            <div className="product-list">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        onAddToCart={handleAddToCart}
                    />
                ))}

            </div>
        </div>
    );
}

export default Home;