import React from "react";
import ChosenProd from "./ChosenProd";

export default function Basket({ products }) {
    return (
        <div>
            {products.map(p => <ChosenProd key={p.id} products={p} />)}
        </div>
    )
}