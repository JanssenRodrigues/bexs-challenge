import React, { useEffect, useState } from "react";
import {
  SidebarContainer,
  BackStep
} from "./style";
import Step from "../Step";
import CreditCard from "../CreditCard";

const Sidebar = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  const onResize = () => {
    setIsDesktop(window.matchMedia('(min-width: 1024px)').matches);
  }
  
  useEffect(() => {
    window.addEventListener('resize', onResize);
  });

  return (
    <SidebarContainer>
      <BackStep to="/">
        {isDesktop 
        ? 'Alterar forma de pagamento'
        : <><strong>Etapa 2</strong> de 3</>
      }
      </BackStep>
      <Step />
      <CreditCard />
    </SidebarContainer>
  );
};

export default Sidebar;
