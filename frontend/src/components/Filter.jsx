import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Filter({ label, filterField, filterOptions }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedFilters, setSelectedFilters] = useState(() =>
    searchParams.getAll(filterField)
  );

  function handleFilter(value) {
    const currentFilters = selectedFilters.includes(value)
      ? selectedFilters.filter((selectedFilter) => selectedFilter !== value)
      : [...selectedFilters, value];

    setSelectedFilters(currentFilters);
    setSearchParams({ [filterField]: currentFilters });
  }

  return (
    <FormControl component="fieldset" variant="standard">
      <FormLabel
        component="legend"
        sx={{ fontWeight: "bold", color: "inherit", mb: 1.25 }}
      >
        {label}
      </FormLabel>
      <FormGroup
        sx={{
          flexDirection: { xs: "column", sm: "row", md: "column" },
          columnGap: 2,
        }}
      >
        {filterOptions.map((option) => (
          <FormControlLabel
            key={option.value}
            control={
              <Checkbox
                name={option.value}
                checked={selectedFilters.includes(option.value)}
                onChange={() => handleFilter(option.value)}
              />
            }
            label={option.label}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
}
