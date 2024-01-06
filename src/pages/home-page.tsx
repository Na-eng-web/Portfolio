import { Box, Typography } from "@mui/material";
import { Children } from "react";
import { Link } from "react-router-dom";
import { IconPhoto } from "../assets";
import { NavigationLinks, bgcolor } from "../porfile";

export const HomePage = () => {
  return (
    <Box
      display={"flex"}
      height={"85vh"}
      bgcolor={bgcolor.primary}
      px={5}
      alignItems={"center"}
      gap={2}
    >
      <Box
        width={"50%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"end"}
      >
        <Box
          borderRadius={"50%"}
          width={"30rem"}
          border={2}
          overflow={"hidden"}
        >
          <img
            src={IconPhoto}
            width={"100%"}
            height={"100%"}
            style={{ objectFit: "contain" }}
          />
        </Box>
      </Box>
      <Box width={"50%"}>
        <Box>
          <Typography
            fontSize={"100px"}
            fontWeight={"600"}
            lineHeight={"100px"}
          >
            Hello
          </Typography>
          <Typography fontSize={"22px"}> A Bit About Me</Typography>
          <Typography fontWeight={"300"}>
            A trustworthy, hardworking and team playing individual, who is
            curious to learn new things and discover new and interesting
            approaches to things .A keen observer of his surroundings and an
            ardent tech and automobiles fan. Will surely be an asset to the
            company
          </Typography>
        </Box>
        <Box display={"flex"} gap={2} my={1}>
          {Children.toArray(
            NavigationLinks.map((link) => (
              <Box
                height={"8rem"}
                width={"8rem"}
                border={1}
                borderRadius={"50%"}
                display={"flex"}
                alignItems={"center"}
                bgcolor={link.bgcolor}
                justifyContent={"center"}
                sx={{
                  ":hover": {
                    bgcolor: "white",
                    transition: "background-color 0.5s ease-in-out",
                  },
                }}
              >
                <Link
                  to={link.path}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Typography textTransform={"capitalize"} fontSize={"24px"}>
                    {link.displayName}
                  </Typography>
                </Link>
              </Box>
            ))
          )}
        </Box>
      </Box>
    </Box>
  );
};
