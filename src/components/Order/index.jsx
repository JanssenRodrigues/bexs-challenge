import React from 'react';
import { OrderContainer, OrderPlaceholder, Separator, OrderItemInfo } from './style';

const Order = () => {
  return (
    <OrderContainer>
      <OrderPlaceholder width="238px" height="18px" />
      <Separator />
      <OrderItemInfo>
        <OrderPlaceholder />
        <OrderPlaceholder width="44px" />
      </OrderItemInfo>
      <OrderItemInfo>
        <OrderPlaceholder />
        <OrderPlaceholder width="44px" />
      </OrderItemInfo>
      <OrderItemInfo>
        <OrderPlaceholder />
        <OrderPlaceholder width="44px" />
      </OrderItemInfo>
      <Separator />
      <OrderItemInfo>
        <OrderPlaceholder color="#C9C9C9" />
        <OrderPlaceholder width="44px" color="#C9C9C9" />
      </OrderItemInfo>
    </OrderContainer>
  );
};

export default Order;