import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";

import { useSearchParams } from "react-router-dom";

export default function Filter({ label, filterField, filterOptions }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get(filterField);

  function handleChange(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }
  return (
    <FormControl component="fieldset" variant="standard">
      <FormLabel
        component="legend"
        sx={{ fontWeight: "bold", color: "inherit", mb: 1.25 }}
      >
        {label}
      </FormLabel>
      <FormGroup>
        {filterOptions.map((option) => (
          <FormControlLabel
            key={option.value}
            control={
              <Checkbox
                name={option.value}
                checked={option.value === currentFilter}
                onChange={() => handleChange(option.value)}
              />
            }
            label={option.label}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
}
