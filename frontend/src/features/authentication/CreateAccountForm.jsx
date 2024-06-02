import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function CreateAccountForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    console.log({
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
      passwordConfirm: data.get("passwordConfirm"),
    });

    event.currentTarget.reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <Stack direction={{ xxs: "column", sm: "row" }} columnGap={3}>
        <TextField
          name="firstName"
          id="firstName"
          label="First Name"
          autoComplete="given-name"
          margin="normal"
          fullWidth
          required
          autoFocus
        />
        <TextField
          name="lastName"
          id="lastName"
          label="Last Name"
          autoComplete="family-name"
          margin="normal"
          fullWidth
          required
        />
      </Stack>
      <TextField
        type="email"
        name="email"
        id="email"
        label="Email Address"
        autoComplete="email"
        margin="normal"
        fullWidth
        required
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
      <TextField
        type="password"
        name="passwordConfirm"
        id="passwordConfirm"
        label="Confirm Password"
        margin="normal"
        fullWidth
        required
      />
      <Button type="submit" fullWidth variant="contained" sx={{ my: 3 }}>
        Sign up
      </Button>

      <Typography>
        Already have an account?{" "}
        <Link component={RouterLink} to="/login" underline="always">
          Login
        </Link>
      </Typography>
    </Box>
  );
}
