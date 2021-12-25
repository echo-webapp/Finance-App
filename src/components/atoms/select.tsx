import { Select } from "antd";
import "./select.css";
import styled from "styled-components";

const { Option } = Select;

interface SelectProps {
  label: string;
  value: any;
  setvalue: any;
}

const SelectContainer = styled.div`
  width: 258px;
`;

const SelectLabel = styled.div`
  color: var(--black);
  text-align: right;
  font-weight: 500;
  font-size: 18px;
`;

const SelectComponent = ({ label, value, setvalue }: SelectProps) => {
  return (
    <SelectContainer>
      <SelectLabel>{label}</SelectLabel>
      <Select
        style={{ width: "100%" }}
        value={value}
        placeholder="Select"
        onChange={(e) => setvalue(e)}
      >
        <Option value="single">Single</Option>
        <Option value="married">Married</Option>
        <Option value="widow">Widow</Option>
        <Option value="divorced">Divorced</Option>
      </Select>
    </SelectContainer>
  );
};

export default SelectComponent;
