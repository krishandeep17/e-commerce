import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

import { UpdatePasswordSchema } from "./authModel";

export default function UpdatePasswordForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(UpdatePasswordSchema) });

  function onSubmit({ password, passwordConfirm }) {
    if (!password || !passwordConfirm) return;

    console.log({ password, passwordConfirm });

    reset();
  }

  return (
    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} mt={0.5}>
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

      <Stack direction="row" spacing={2} mt={2}>
        <Button type="submit" variant="contained">
          Save Changes
        </Button>
        <Button type="button" variant="outlined" onClick={() => reset()}>
          Cancel
        </Button>
      </Stack>
    </Box>
  );
}
