import React from "react";
import styled from "styled-components";

const KioskTemplateBlock = styled.div`
  width: 600px;
  height: 900px;

  position: relative;
  background: #f8f9fa;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;

function KioskTemplate({ children }) {
  return <KioskTemplateBlock>{children}</KioskTemplateBlock>;
}

export default KioskTemplate;
