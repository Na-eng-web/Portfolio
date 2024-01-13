import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import { Children } from "react";
import { bgcolor } from "../profile";
import Mediaquery from "./medial-queries";

const socialMediaLink = [
  {
    icon: <Facebook />,
    link: "https://www.facebook.com/narendra.sonvatkar",
  },
  {
    icon: <Twitter />,
    link: "https://twitter.com/NarendraSonvat1",
  },
  {
    icon: <LinkedIn />,
    link: "https://www.linkedin.com/in/narendra-sonvatkar-7b1a9a1b6/",
  },
];

export const Footer = () => {
  const { isMobileView } = Mediaquery();

  return (
    <Box bgcolor={bgcolor.primary} p={5}>
      <Divider sx={{ mb: 3 }} />
      <Box
        display="flex"
        flexDirection={isMobileView ? "column" : "row"}
        justifyContent="space-between"
        alignItems={isMobileView ? "center" : "flex-start"}
      >
        <Box display={"flex"} gap={3} my={1}>
          <Box>
            <Typography textAlign={"center"} fontWeight={"600"}>
              Phone
            </Typography>
            <Typography>7709749193</Typography>
          </Box>
          {isMobileView && (
            <Box>
              <Typography textAlign={"center"} fontWeight={"600"}>
                Email
              </Typography>
              <Typography>sonvatkar777@gmail.com</Typography>
            </Box>
          )}
        </Box>
        {!isMobileView && (
          <Box>
            <Typography textAlign={"center"} fontWeight={"600"}>
              Email
            </Typography>
            <Typography>sonvatkar777@gmail.com</Typography>
          </Box>
        )}
        <Box>
          <Typography textAlign={"center"} fontWeight={"600"}>
            Follow Me
          </Typography>
          <Box display="flex" gap={1}>
            {Children.toArray(
              socialMediaLink.map((link) => (
                <IconButton edge="start" onClick={() => window.open(link.link)}>
                  {link.icon}
                </IconButton>
              ))
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
