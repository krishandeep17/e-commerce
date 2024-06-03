import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

import { RecoverPasswordSchema } from "./authModel";

export default function RecoverPasswordForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(RecoverPasswordSchema) });

  function onSubmit({ email }) {
    if (!email) return;

    console.log({ email });

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
      <Button type="submit" fullWidth variant="contained" sx={{ my: 3 }}>
        Recover Password
      </Button>
    </Box>
  );
}
