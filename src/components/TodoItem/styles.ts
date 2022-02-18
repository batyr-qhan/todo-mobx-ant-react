import styled from "styled-components";

export const ItemContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(40, 44, 52, .5);
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    .icon-container {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
`;

export const RemoveIcon = styled.div.attrs(() => ({
  className: "icon-container",
}))`
    opacity: 0;
`;

export const FormContainer = styled.div`
  margin: 20px 0;
`;
