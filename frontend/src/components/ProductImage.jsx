import { Stack } from "@mui/material";

export default function ProductImage({ src, size, alt }) {
  return (
    <Stack
      component="picture"
      alignItems="center"
      justifyContent="center"
      bgcolor="brand.gray_100"
      p={3}
    >
      <img
        src={src}
        width={size}
        height={size}
        alt={alt}
        loading="lazy"
        style={{
          objectFit: "contain",
          aspectRatio: "1",
        }}
      />
    </Stack>
  );
}
