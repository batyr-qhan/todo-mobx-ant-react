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
  align-items: center;
`;

export const IconsContainer = styled.ul`
  display: flex;
`;

interface IContainerProps {
  isCountdown?: boolean;
}

export const IconContainer = styled.li<IContainerProps>`
  background-color: ${(props) => props.isCountdown && "#fc3a52"};
  padding: ${(props) => props.isCountdown && "3px 8px"};
  border-radius: ${(props) => props.isCountdown && "5px"};
  color: ${(props) => props.isCountdown && "#fff"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  position: relative;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    transform: ${(props) => !props.isCountdown && "scale(1.2)"};
    &:after {
      content: "Days until this task is deleted. Get back in one month to check how it works =)";
      display: ${(props) => (props.isCountdown ? "block" : "none")};
      position: absolute;
      background-color: #fc3a;
      font-size: 10px;
      width: 150px;
      top: -60px;
      right: -150px;
      z-index: 10;
      padding: 5px;
      border-radius: 5px;
    }
  }
`;

export const FormContainer = styled.div`
  margin: 20px 0;
`;
