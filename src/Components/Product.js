import React from "react";
import styled from 'styled-components';

export default function Product({ products }) {
    const { nome, preco, imagem } = products;
    return (
        <Container>
            <img src={imagem} alt="image-product"></img>
            <div>
                <p>{nome}</p>
                <p>{preco}</p>
            </div>
            <button>Comprar</button>
        </Container>
    )

}

const Container = styled.div`
border: solid 1px;
display:flex;
flex-direction:column;
width:220px;
align-items:center;
margin: 10px;

div{
    display:flex;
    width:90%;
    justify-content: space-between;
}

img {
    width: 200px;
    height: 200px;
  }

button{
    width: 90%;
    margin-bottom: 10px;
}
`