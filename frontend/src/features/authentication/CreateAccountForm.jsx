import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";

import { CreateAccountSchema } from "./authModel";

export default function CreateAccountForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(CreateAccountSchema) });

  function onSubmit({ firstName, lastName, email, password, passwordConfirm }) {
    if (!firstName || !lastName || !email || !password || !passwordConfirm)
      return;

    console.log({ firstName, lastName, email, password, passwordConfirm });

    reset();
  }

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      sx={{ mt: 1 }}
    >
      <Stack direction={{ xxs: "column", sm: "row" }} columnGap={3}>
        <TextField
          label="First Name"
          autoComplete="given-name"
          margin="normal"
          fullWidth
          required
          autoFocus
          {...register("firstName")}
          error={Boolean(errors?.firstName)}
          helperText={errors?.firstName?.message}
        />
        <TextField
          label="Last Name"
          autoComplete="family-name"
          margin="normal"
          fullWidth
          required
          {...register("lastName")}
          error={Boolean(errors?.lastName)}
          helperText={errors?.lastName?.message}
        />
      </Stack>
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
      <TextField
        type="password"
        label="Confirm Password"
        margin="normal"
        fullWidth
        required
        {...register("passwordConfirm")}
        error={Boolean(errors?.passwordConfirm)}
        helperText={errors?.passwordConfirm?.message}
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
