import React from "react";

// const ProductCard = (props) => {
//     return <span>{props.name}/{props.price}</span>;
// }

{/* key:value(전달값) 동일하면 : 생략 */ }
const ProductCard = ({name, price}) => {
    return (
        <div className="product-card">
            <h2>{name}</h2>
            <p>Price : ${price}</p>
        </div>
    );
};

export default ProductCard;