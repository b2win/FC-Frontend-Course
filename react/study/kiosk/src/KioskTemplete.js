import React from "react";
import styled from "styled-components";

const KioskTemplateBlock = styled.div`
  width: 700px;
  overflow-y: auto;

  position: relative;
  background: #f8f9fa;
  border: 1px solid black;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

  margin: auto;

  display: flex;
  flex-direction: column;

  align-items: center;
`;

function KioskTemplate({ children }) {
  return <KioskTemplateBlock>{children}</KioskTemplateBlock>;
}

export default KioskTemplate;
