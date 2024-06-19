import { Divider, Stack } from "@mui/material";

import Filter from "../../components/Filter";
import SortBy from "../../components/SortBy";
import { categories } from "../../data/data-categories";

const filterOptions = categories.map((category) => ({
  value: category.label.toLowerCase(),
  label: category.label,
}));

const sortByOptions = [
  { value: "createdAt-desc", label: "Latest" },
  { value: "createdAt-asc", label: "Oldest" },
];

export default function ProductOperations() {
  return (
    <Stack
      divider={<Divider orientation="horizontal" flexItem />}
      spacing={2.5}
    >
      <Filter
        label="Product Categories"
        filterField="category"
        filterOptions={filterOptions}
      />

      <SortBy sortByOptions={sortByOptions} />
    </Stack>
  );
}
