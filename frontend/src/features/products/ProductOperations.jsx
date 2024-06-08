import { Box } from "@mui/material";

import Filter from "../../components/Filter";
import SortBy from "../../components/SortBy";
import { categories } from "../../data/categories";

const filterOptions = categories.map((category) => ({
  value: category.title
    .toLowerCase()
    .replaceAll("&", "and")
    .replaceAll(" ", "-"),
  label: category.title,
}));

const sortByOptions = [
  { value: "-createdAt", label: "Latest" },
  { value: "createdAt", label: "Oldest" },
];

export default function ProductOperations() {
  return (
    <Box>
      <Filter
        label="Product Categories"
        filterField="categories"
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
