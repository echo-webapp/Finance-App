import { Select } from "antd";
import "./select.css";
import styled from "styled-components";

const { Option } = Select;

interface SelectProps {
  label?: string;
  value: any;
  setvalue: any;
  options: any;
}

const SelectContainer = styled.div`
  width: 258px;
`;

const SelectContainer1 = styled.div`
  width: 100%;
  height: 40px;
  padding: 20px;
`;

const SelectLabel = styled.div`
  color: var(--black);
  text-align: right;
  font-weight: 500;
  font-size: 18px;
`;

const SelectComponent = ({ label, value, setvalue, options }: SelectProps) => {
  if (!label) {
    return (
      <SelectContainer1>
        <Select
          style={{ width: "100%" }}
          value={value}
          placeholder="In"
          onChange={(e) => setvalue(e)}
        >
          {options.map((opt: any) => {
            return <Option value={opt.value}>{opt.name}</Option>;
          })}
        </Select>
      </SelectContainer1>
    );
  }
  console.log("inside lable");
  return (
    <SelectContainer>
      <SelectLabel>{label}*</SelectLabel>
      <Select
        style={{ width: "100%" }}
        value={value}
        placeholder="Select"
        onChange={(e) => setvalue(e)}
      >
        {options.map((opt: any) => {
          return <Option value={opt.value}>{opt.name}</Option>;
        })}
      </Select>
    </SelectContainer>
  );
};

export default SelectComponent;
