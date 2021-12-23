import { Select } from "antd";

const { Option } = Select;

interface SelectProps {
  value: any;
  setvalue: any;
}

const SelectComponent = ({ value, setvalue }: SelectProps) => {
  return (
    <Select
      style={{ width: 258 }}
      value={value}
      placeholder="Select"
      onChange={(e) => setvalue(e)}
    >
      <Option value="single">Single</Option>
      <Option value="married">Married</Option>
      <Option value="widow">Wido</Option>
      <Option value="divorced">Divorced</Option>
    </Select>
  );
};

export default SelectComponent;
