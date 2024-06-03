import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Link, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";

import { LoginSchema } from "./authModel";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(LoginSchema) });

  function onSubmit({ email, password }) {
    if (!email || !password) return;

    console.log({ email, password });

    reset();
  }

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      sx={{ mt: 1 }}
    >
      <TextField
        type="email"
        label="Email Address"
        autoComplete="email"
        margin="normal"
        fullWidth
        required
        autoFocus
        {...register("email")}
        error={Boolean(errors?.email)}
        helperText={errors?.email?.message}
      />
      <TextField
        type="password"
        label="Password"
        autoComplete="current-password"
        margin="normal"
        fullWidth
        required
        {...register("password")}
        error={Boolean(errors?.password)}
        helperText={errors?.password?.message}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ my: 3 }}>
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
