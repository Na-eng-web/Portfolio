import { Box, Button, Divider, Typography } from "@mui/material";
import { Children } from "react";
import { Link, Outlet } from "react-router-dom";
import { NavigationLinks, bgcolor } from "../porfile";
import { Footer } from "./footer";

export const Header = () => {
  return (
    <>
      <Box
        py={3}
        px={5}
        bgcolor={bgcolor.primary}
        display={"flex"}
        gap={1}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box gap={1} display={"flex"} alignItems={"center"}>
          <Box
            bgcolor={bgcolor.secondary}
            height={"22px"}
            width={"22px"}
            borderRadius={"50%"}
          ></Box>
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            <Typography fontSize={"22px"} fontWeight={600}>
              Narendra Sonvatkar
            </Typography>
          </Link>
          <Typography fontSize={"16px"}>Developer</Typography>
        </Box>
        <Box display={"flex"}>
          {Children.toArray(
            NavigationLinks.map((link, index) => (
              <Box display={"flex"}>
                <Link to={link.path}>
                  <Button
                    sx={{
                      fontSize: "16px",
                      textTransform: "capitalize",
                      mx: 0.5,
                      color: "black",
                    }}
                  >
                    {link.displayName}
                  </Button>
                </Link>
                {index !== NavigationLinks.length - 1 && (
                  <Divider orientation="vertical" />
                )}
              </Box>
            ))
          )}
        </Box>
      </Box>
      <Outlet />
      <Footer />
    </>
  );
};
