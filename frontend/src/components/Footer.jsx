import {
  Box,
  Container,
  Fade,
  Link,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";

import Logo from "./Logo";
import { GithubIcon, InstagramIcon, LinkedInIcon } from "./icons";

const socialLinks = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/krishandeep17/",
    icon: <LinkedInIcon />,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/krishandeep17/",
    icon: <InstagramIcon />,
  },
  {
    title: "GitHub",
    url: "https://github.com/krishandeep17/",
    icon: <GithubIcon />,
  },
];

export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <Box
      component="footer"
      py={{ xs: 7, sm: 5 }}
      bgcolor="primary.main"
      color={grey["A100"]}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent={{ xs: "center", sm: "space-between" }}
          alignItems="center"
          flexWrap="wrap"
          rowGap={4}
          columnGap={6}
        >
          <Logo color="white" width="180" height="30" />

          <Typography textAlign="center">
            &copy; {currentYear} E-Commerce. All Rights are reserved
          </Typography>

          <Stack direction="row" alignItems="center" spacing={6}>
            {socialLinks.map((socialLink) => (
              <Tooltip
                key={socialLink.title}
                TransitionComponent={Fade}
                title={socialLink.title}
                placement="top"
                arrow
              >
                <Link
                  color={grey["A100"]}
                  href={socialLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  lineHeight="0"
                >
                  {socialLink.icon}
                </Link>
              </Tooltip>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
