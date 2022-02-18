import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  background: #e8d5b7;
  border: none;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  padding: 0 20px;
  background-color: #e8d5b7;
  color: #282c34;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: ${(props) => (props.disabled ? "none" : "#f9b248")};
    color: ${(props) => (props.disabled ? "none" : "#fff")};
  }
  &:active {
    scale: 0.95;
  }
  margin-left: 10px;
  font-weight: bold;
`;

export const FormContainer = styled.form`
  display: flex;
`;

export const Label = styled.label`
  flex: 1;
`;
