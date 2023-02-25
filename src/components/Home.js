import React from "react";
import styled from "styled-components";
import Section from "./Section";
import carInfo from '../carInfo.json'

function Home() {
  return (
    <Container>
      <Section 
        title="Model S"
        description="Order Online for Touchless delievery"
        backgroundImage="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section 
        title="Model Y"
        description="Order Online for Touchless delievery"
        backgroundImage="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section 
        title="Model X"
        description="Order Online for Touchless delievery"
        backgroundImage="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section 
        title="Model 3"
        description="Order Online for Touchless delievery"
        backgroundImage="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section 
        title=""
        description="Order Online for Touchless delievery"
        backgroundImage="new-interior.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section 
        title=""
        description="Order Online for Touchless delievery"
        backgroundImage="game.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section 
        title=""
        description="Order Online for Touchless delievery"
        backgroundImage="solar-panel.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section 
        title=""
        description="Order Online for Touchless delievery"
        backgroundImage="audio.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section 
        title=""
        description="Order Online for Touchless delievery"
        backgroundImage="accessories.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section 
        title=""
        description="Order Online for Touchless delievery"
        backgroundImage="solar-roof.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
