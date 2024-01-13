import { useMediaQuery, useTheme } from "@mui/material";

const Mediaquery = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const isTabletView = useMediaQuery(theme.breakpoints.down("md"));
  return { isMobileView, isTabletView };
};

export default Mediaquery;
