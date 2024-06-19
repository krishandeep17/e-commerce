import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function useBreakpoint(breakpoint) {
  const theme = useTheme();
  const isScreenSize = useMediaQuery(theme.breakpoints.down(breakpoint));

  return isScreenSize;
}
