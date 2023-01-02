import styled from "styled-components";

export const ItemContainer = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(40, 44, 52, 0.5);
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
  align-items:center;
`;

export const IconsContainer = styled.ul`
  display: flex;
`;

export const IconContainer = styled.li`
  margin-right: 12px;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    transform: scale(1.2)
  }
`;

export const FormContainer = styled.div`
  margin: 20px 0;
`;
