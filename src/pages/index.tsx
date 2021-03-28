/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import Product from '@/components/Product';
import api from '@/services/api';
import { GetServerSideProps } from 'next';
import {
  Title,
  Main,
  ContainerTitle,
  ContainerCart,
  ContainerTotal,
  TolalText,
  Container,
  ContainerButtonsTop,
  Footer,
  SuccessMessage,
} from '@/styles/pages/home';
import Button from '@/components/Button';
import { converterPrice } from '@/utils/formatPrice';
import { ProductType } from '@/@types';
import SEO from '@/components/SEO';

export default function Home({
  listProductsHigherThen10,
  listProductsLowerThen10,
}) {
  const [listProducts, setListProducts] = useState([]);
  const [showListUnder10, setShowListUnder10] = useState(true);

  useEffect(() => {
    if (showListUnder10) {
      setListProducts(listProductsLowerThen10.items);
      return;
    }
    setListProducts(listProductsHigherThen10.items);
  }, [
    listProductsHigherThen10.items,
    listProductsLowerThen10.items,
    showListUnder10,
  ]);

  const total = listProducts.reduce((sumTotal, product) => {
    sumTotal += product.price * product.quantity;
    return sumTotal;
  }, 0);

  const handleProductAmount = (item: ProductType, quantity: number) => {
    const index = listProducts.findIndex(product => product.id === item.id);
    const newListproducts = [...listProducts];
    if (quantity > 0) {
      newListproducts[index].quantity = quantity;
      setListProducts(newListproducts);
    }
  };

  return (
    <Container>
      <SEO title="Teste Trfas" />
      <ContainerCart>
        <ContainerTitle>
          <Title>Meu carrinho</Title>
          <ContainerButtonsTop>
            <button type="button" onClick={() => setShowListUnder10(false)}>
              Acima de 10
            </button>
            <button type="button" onClick={() => setShowListUnder10(true)}>
              Abaixo de 10
            </button>
          </ContainerButtonsTop>
        </ContainerTitle>
        <Main>
          {listProducts.map(item => {
            return (
              <Product
                updateProductAmount={handleProductAmount}
                product={item}
              />
            );
          })}
        </Main>
        <Footer>
          <ContainerTotal>
            <TolalText>Total</TolalText>
            <TolalText>{converterPrice(total)}</TolalText>
          </ContainerTotal>
          {total / 100 > 10 && (
            <SuccessMessage>
              Parabéns, sua compra tem frete grátis!
            </SuccessMessage>
          )}
        </Footer>
        <Button color="bg-blue-primary">Finalizar compra</Button>
      </ContainerCart>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const lower = await api.get('/api/abaixo-10');
  const higher = await api.get('/api/acima-10');
  const listProductsHigherThen10 = higher?.data;
  const listProductsLowerThen10 = lower?.data;

  return {
    props: {
      listProductsHigherThen10,
      listProductsLowerThen10,
    },
  };
};
