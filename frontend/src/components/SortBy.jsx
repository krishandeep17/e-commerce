import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useSearchParams } from "react-router-dom";

export default function SortBy({ sortByOptions }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy") || sortByOptions[0].value;

  function handleChange(event) {
    searchParams.set("sortBy", event.target.value);
    setSearchParams(searchParams);
  }

  return (
    <FormControl>
      <FormLabel
        id="sort-by"
        sx={{ fontWeight: "bold", color: "inherit", mb: 1.25 }}
      >
        Sort By
      </FormLabel>
      <RadioGroup
        aria-labelledby="sort-by"
        value={sortBy}
        name="radio-buttons-group"
      >
        {sortByOptions.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio onChange={handleChange} />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
