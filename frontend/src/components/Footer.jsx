import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import {
  Box,
  Container,
  Link,
  Stack,
  Tooltip,
  Typography,
  tooltipClasses,
} from "@mui/material";
import { grey } from "@mui/material/colors";

import Logo from "./Logo";

const socialLinks = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/krishandeep17/",
    icon: <LinkedIn />,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/krishandeep17/",
    icon: <Instagram />,
  },
  {
    title: "GitHub",
    url: "https://github.com/krishandeep17/",
    icon: <GitHub />,
  },
];

export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <Box
      component="footer"
      py={{ xxs: 6, sm: 4 }}
      bgcolor="primary.main"
      color={grey["A100"]}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xxs: "column", sm: "row" }}
          justifyContent={{ xxs: "center", sm: "space-between" }}
          alignItems="center"
          flexWrap="wrap"
          rowGap={2}
          columnGap={3}
          mt={{ xxs: 4, sm: 0 }}
          textAlign={{ xxs: "center", sm: "inherit" }}
        >
          <Logo color="white" width="180" height="30" />

          <Typography variant="body1">
            &copy; {currentYear} E-Commerce. All Rights are reserved
          </Typography>

          <Stack direction="row" alignItems="center" gap={3}>
            {socialLinks.map((socialLink) => (
              <Link
                key={socialLink.title}
                color={grey["A100"]}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
                lineHeight="0"
              >
                <Tooltip
                  title={socialLink.title}
                  slotProps={{
                    popper: {
                      sx: {
                        [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
                          {
                            marginTop: "6px",
                          },
                      },
                    },
                  }}
                >
                  {socialLink.icon}
                </Tooltip>
              </Link>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
