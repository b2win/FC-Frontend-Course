import React from "react";
import styled from "styled-components";

const CategoryTemplateBlock = styled.h3`
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
