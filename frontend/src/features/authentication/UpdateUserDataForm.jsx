import { zodResolver } from "@hookform/resolvers/zod";
import { EditOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Fab, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import defaultAvatar from "../../assets/images/avatar.svg";
import { UpdateUserDataSchema } from "./authModel";

export default function UpdateUserDataForm() {
  const user = {
    firstName: "Krishandeep",
    lastName: "Singh",
    email: "krishandeep17@gmail.com",
    avatar: "",
  };

  const [avatarFile, setAvatarFile] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: user?.email,
      firstName: user?.firstName,
      lastName: user?.lastName,
      avatar: user?.avatar,
    },
    resolver: zodResolver(UpdateUserDataSchema),
  });

  function resetForm() {
    setAvatarFile(null);
    reset();
  }

  function onSubmit({ avatar, firstName, lastName }) {
    if (!firstName || !lastName) return;

    console.log({ avatar, firstName, lastName });

    resetForm();
  }

  function handleFileChange(event) {
    const file = event.target.files[0];

    if (file) setAvatarFile(file);
  }

  function renderAvatarPreview(file) {
    if (file) {
      const previewUrl = URL.createObjectURL(file);

      return (
        <Avatar
          src={previewUrl}
          alt="Avatar Preview"
          sx={{ width: 100, height: 100 }}
        />
      );
    }

    return (
      <Avatar
        src={user?.avatar || defaultAvatar}
        alt="Default Avatar"
        sx={{ width: 100, height: 100 }}
      />
    );
  }

  return (
    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} mt={0.5}>
      <Box position="relative" width="fit-content">
        {renderAvatarPreview(avatarFile)}

        <Fab
          aria-label="upload image"
          size="small"
          component="label"
          htmlFor="image-upload"
          sx={{ position: "absolute", bottom: 0, right: 0 }}
        >
          <EditOutlined />
        </Fab>

        <Controller
          name="avatar"
          control={control}
          render={({ field }) => (
            <input
              accept="image/*"
              type="file"
              id="image-upload"
              style={{ display: "none" }}
              onChange={(e) => {
                handleFileChange(e);
                field.onChange(e.target.files[0]);
              }}
            />
          )}
        />
      </Box>

      <Stack direction={{ xs: "column", sm: "row" }} columnGap={3} mt={1}>
        <TextField
          label="First Name"
          autoComplete="given-name"
          margin="normal"
          fullWidth
          required
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
        disabled
        {...register("email")}
      />

      <Stack direction="row" spacing={2} mt={2}>
        <Button type="submit" variant="contained">
          Save Changes
        </Button>

        <Button type="button" variant="outlined" onClick={resetForm}>
          Cancel
        </Button>
      </Stack>
    </Box>
  );
}
