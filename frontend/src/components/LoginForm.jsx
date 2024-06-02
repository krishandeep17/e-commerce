import { Box, Button, Link, Stack, TextField } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

export default function LoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField
        type="email"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        type="password"
        name="password"
        id="password"
        label="Password"
        autoComplete="current-password"
        margin="normal"
        fullWidth
        required
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Login
      </Button>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap={0.25}
        columnGap={3}
      >
        <Link component={RouterLink} to="/create-account" underline="always">
          Create an account
        </Link>
        <Link component={RouterLink} to="/recover-password" underline="always">
          Recover your password
        </Link>
      </Stack>
    </Box>
  );
}
