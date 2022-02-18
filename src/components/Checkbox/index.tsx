import styled, { StyledComponent } from "styled-components";
import { Text } from "../Text/index";

const CheckboxContainer = styled.div`
  margin-right: 20px;
  label {
    position: relative;
  }
  input[type="checkbox"] {
    visibility: hidden;
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: transparent;
    border: 3px solid #f9b248;
    border-radius: 50%;
  }

  label input:checked ~ span {
    background-color: #f9b248;
  }
  span:after {
    content: "";
    position: absolute;
    display: none;
  }
  label input:checked ~ span:after {
    display: block;
  }
`;

const Label = styled.label``;

const Input = styled.input``;

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
};

const Checkbox: React.FC<Props> = ({ onChange, checked }) => (
  <CheckboxContainer>
    <Label>
      <Input type="checkbox" onChange={onChange} checked={checked} />
      <Text />
    </Label>
  </CheckboxContainer>
);

export default Checkbox;
