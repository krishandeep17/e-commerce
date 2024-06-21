import { Box, Typography } from "@mui/material";

import defaultAvatar from "../../assets/images/avatar.svg";

export default function UserProfile() {
  const user = {
    firstName: "Krishandeep",
    lastName: "Singh",
    email: "krishandeep17@gmail.com",
    avatar: "",
  };

  const fullName = `${user?.firstName} ${user?.lastName}`;

  return (
    <>
      <img
        src={user?.avatar || defaultAvatar}
        width="50"
        height="50"
        alt={`${fullName}'s avatar`}
        loading="lazy"
      />

      <Box overflow="hidden">
        <Typography
          fontWeight="bold"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          textTransform="capitalize"
        >
          {fullName}
        </Typography>
        <Typography
          variant="body2"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {user?.email}
        </Typography>
      </Box>
    </>
  );
}
