import styled from "styled-components";
import { useState } from "react";

const InputContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

const Label = styled.div`
  color: var(--black);
  text-align: right;
  font-weight: 500;
  font-size: 18px;
`;

const InputBase = styled.input<InputBaseProps>`
  margin-top: 8px;
  text-align: right;
  padding: 16px;
  border: 1px solid var(--black);
  border: ${(props) =>
    props.focus === true
      ? "1.5px solid var(--black)"
      : "1px solid var(--grey)"};
  outline: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
`;

interface InputBaseProps {
  focus: boolean;
}

interface InputProps {
  label: string;
  placeholder: string;
  type: string;
  value: any;
  setvalue: any;
}

const Input = ({ type, label, placeholder, value, setvalue }: InputProps) => {
  const [focus, setFocus] = useState(false);

  return (
    <InputContainer>
      <Label>{label}</Label>
      <InputBase
        onFocus={(e) => setFocus(true)}
        onBlur={(e) => setFocus(false)}
        focus={focus}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setvalue(e.target.value)}
      />
    </InputContainer>
  );
};

export default Input;
