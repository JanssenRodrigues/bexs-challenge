import React from 'react';
import { BreadcrumbContainer, BreadcrumbList, BreadcrumbItem, BreadcrumbStep } from './style';

const Breadcrumb = () => {
  const step = 1;
  const numberOfSteps = 3;
  return (
    <BreadcrumbContainer>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbStep active>1</BreadcrumbStep>
          Carrinho
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbStep>2</BreadcrumbStep>
          Pagamento
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbStep>3</BreadcrumbStep>
          Confirmação
        </BreadcrumbItem>
      </BreadcrumbList>
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;