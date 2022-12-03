import React from "react";
import styled from "styled-components";
import Product from "./Product";

export default function Products({ products }) {

    return (
        <Container>
            {products.map(p => <Product key={p.id} products={p} />)}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`
