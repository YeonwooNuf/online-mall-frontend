import React from "react";

// const ProductCard = (props) => {
//     return <span>{props.name}/{props.price}</span>;
// }

{/* key:value(전달값) 동일하면 : 생략 */ }
const ProductCard = ({name, price, onAddToCart}) => {
    return (
        <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', backgroundColor: '#fff' }}>
            <h2>{name}</h2>
            <p>Price : ${price}</p>
            <button onClick={onAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;