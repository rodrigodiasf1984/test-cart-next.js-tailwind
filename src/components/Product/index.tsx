import React from 'react';
import { converterPrice } from '@/utils/formatPrice';
import { ProductProps } from '@/@types';

import {
  ContainerButtons,
  ContainerImage,
  ProductContainer,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductSellingPrice,
} from '@/styles/components/product';

const ProductComponent: React.FC<ProductProps> = ({
  product,
  updateProductAmount,
}) => {
  const { name, price, sellingPrice, imageUrl } = product;

  return (
    <ProductContainer>
      <ContainerImage>
        <img
          width="70px"
          height="70px"
          className="rounded-xl"
          src={imageUrl}
          alt="Product"
        />
      </ContainerImage>
      <ProductInfo>
        <ProductName>{name}</ProductName>
        <ProductPrice>{converterPrice(price)}</ProductPrice>
        <ProductSellingPrice>
          {converterPrice(sellingPrice)}
        </ProductSellingPrice>
      </ProductInfo>
      <ContainerButtons>
        <svg
          onClick={() => updateProductAmount(product, product.quantity + 1)}
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <svg
          onClick={() => updateProductAmount(product, product.quantity - 1)}
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </ContainerButtons>
    </ProductContainer>
  );
};

export default ProductComponent;
