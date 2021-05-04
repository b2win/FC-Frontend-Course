import React from "react";
import styled from "styled-components";

const CategoryTemplateBlock = styled.h3`
  /* width: 700px;
  overflow-y: auto;

  position: relative;
  background: #f8f9fa;
  border: 1px solid black;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

  margin: 0 auto;

  display: flex;
  flex-direction: column;

  align-items: center; */

  cursor: pointer;
  font-weight: bold;
  background: #dee2e6;
  height: 30px;
  width: 600px;
  text-align: center;
  padding: 0;
  border-radius: 16px;
`;

function CategoryTemplate({ children }) {
  return <CategoryTemplateBlock>{children}</CategoryTemplateBlock>;
}

export default CategoryTemplate;
