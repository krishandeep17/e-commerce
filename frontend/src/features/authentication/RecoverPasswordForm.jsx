import { Box, Button, TextField } from "@mui/material";

export default function RecoverPasswordForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get("email"),
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField
        type="email"
        name="email"
        id="email"
        label="Email Address"
        autoComplete="email"
        margin="normal"
        fullWidth
        required
        autoFocus
      />
      <Button type="submit" fullWidth variant="contained" sx={{ my: 3 }}>
        Recover Password
      </Button>
    </Box>
  );
}
