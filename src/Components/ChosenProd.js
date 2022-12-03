import React from "react";
import styled from 'styled-components';

export default function ChosenProd({ products }) {
    const { nome, preco, imagem } = products;
    return (
        <Container>
            <img src={imagem} alt="image-product"></img>
            <div>
                <p>{nome}</p>
                <p>{preco}</p>
            </div>
            <button>X</button>
        </Container>
    )
}

const Container = styled.div`
    img{
        width: 50px;
        height: 50px;
    }
`