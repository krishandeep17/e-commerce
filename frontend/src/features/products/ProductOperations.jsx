import { Box } from "@mui/material";

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
    <Box>
      <Filter
        label="Product Categories"
        filterField="category"
        filterOptions={filterOptions}
      />

      <Box
        component="hr"
        border="none"
        bgcolor="brand.gray_200"
        height="1px"
        my={2.5}
      />

      <SortBy sortByOptions={sortByOptions} />
    </Box>
  );
}
