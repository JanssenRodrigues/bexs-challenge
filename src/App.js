import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { BaseStyle, PageContent, Content } from "./style";
import Sidebar from "./components/Sidebar";
import RegisterForm from "./components/Form";
import Context from "./components/Context";


function App() {
  const [cardInfo, setCardInfo] = useState({
    number: '**** **** **** ****',
    name: 'Nome do titular',
    validate: '00/00',
    securityNumber: '000',
    showFront: true,
  });


  return (
    <>
      <Router>
        <Context.Provider value={[cardInfo, setCardInfo]}>
          <BaseStyle />
          <PageContent>
            <Sidebar cardInfo={cardInfo} />
            <Content>
              <RegisterForm cardInfo={cardInfo} setCardInfo={setCardInfo} />
            </Content>
          </PageContent>
        </Context.Provider>
      </Router>
    </>
  );
}

export default App;
