import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";

export default function PersonalInfo() {
  const [isChangePassword, setIsChangePassword] = useState(false);

  function handleClick() {
    setIsChangePassword((isChangePassword) => !isChangePassword);
  }

  return (
    <Stack spacing={1} pt={1} px={{ xs: 0, sm: 2 }}>
      <Typography component="h5" variant="h6" fontWeight="700">
        Personal Info
      </Typography>

      <Typography color="text.secondary">
        Change your {!isChangePassword ? "account details" : "password"} below,
        or{" "}
        <Button
          variant="text"
          disableRipple
          onClick={handleClick}
          sx={{
            all: "unset",
            cursor: "pointer",
            textDecoration: "underline",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          click here
        </Button>{" "}
        to change your {!isChangePassword ? "password" : "account details"}.
      </Typography>

      {!isChangePassword ? <UpdateUserDataForm /> : <UpdatePasswordForm />}
    </Stack>
  );
}
