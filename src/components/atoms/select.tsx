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
interface SelectContainerProps {
  label: string;
}

const SelectContainer = styled.div<SelectContainerProps>`
  width: ${(props) => {
    if (
      props.label == "Bank Name" ||
      props.label == "Credit Card Type" ||
      props.label == "Credit Card Provider"
    ) {
      return "100%";
    }
    return "258px";
  }};
`;

const SelectContainer1 = styled.div`
  width: 100%;
  height: 20px;
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
            return (
              <Option key={opt.value} value={opt.value}>
                {opt.name}
              </Option>
            );
          })}
        </Select>
      </SelectContainer1>
    );
  }

  return (
    <SelectContainer label={label}>
      <SelectLabel>{label}*</SelectLabel>
      <Select
        style={{ width: "100%" }}
        value={value}
        placeholder="Select"
        onChange={(e) => setvalue(e)}
      >
        {options.map((opt: any) => {
          return (
            <Option key={opt.value} value={opt.value}>
              {opt.name}
            </Option>
          );
        })}
      </Select>
    </SelectContainer>
  );
};

export default SelectComponent;
