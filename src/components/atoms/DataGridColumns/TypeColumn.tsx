import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const TypeColumn = ({
  params,
  handleOptionChange,
  dropdown_options,
  setflag,
  updateRow,
}: any) => {
  const [value, setvalue]: any = useState(params.value);

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 140 }}>
        <Select
          value={value}
          onChange={(e) => {
            handleOptionChange(params.row, params.field, e.target.value);
            const row = {
              ...params.row,
              [params.field]: e.target.value,
            };
            // updateRow(row);
            setvalue(e.target.value);
            setflag((prev: any) => !prev);
          }}
        >
          {dropdown_options.type.map((item: any) => {
            return (
              <MenuItem key={item.value} value={item.value}>
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default TypeColumn;
