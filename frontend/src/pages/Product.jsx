import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();

  return <Box>Product: {id}</Box>;
}
