import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Children, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { NavigationLinks, bgColor } from "../profile";
import { Footer } from "./footer";
import Mediaquery from "./medial-queries";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { isMobileView } = Mediaquery();

  return (
    <>
      <Box
        py={isMobileView ? 2 : 3}
        px={isMobileView ? 3 : 5}
        bgcolor={bgColor.primary}
        display="flex"
        flexDirection={isMobileView ? "column" : "row"}
        alignItems={isMobileView ? "center" : "flex-start"}
        justifyContent={isMobileView ? "space-between" : "space-between"}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent={isMobileView ? "space-between" : "flex-start"}
          width="100%"
        >
          <Box
            gap={1}
            display="flex"
            alignItems={isMobileView ? "center" : "center"}
          >
            <Box
              bgcolor={bgColor.secondary}
              height={isMobileView ? "16px" : "22px"}
              width={isMobileView ? "16px" : "22px"}
              borderRadius="50%"
            ></Box>
            <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
              <Typography
                fontSize={isMobileView ? "18px" : "22px"}
                fontWeight={600}
                whiteSpace={"nowrap"}
              >
                Narendra Sonvatkar
              </Typography>
            </Link>
            {!isMobileView && (
              <Typography fontSize="16px">Developer</Typography>
            )}
          </Box>
          {isMobileView && (
            <IconButton onClick={handleMenuToggle}>
              <MenuIcon />
            </IconButton>
          )}
        </Box>
        {!isMobileView && (
          <Box display="flex" alignItems="center">
            {Children.toArray(
              NavigationLinks.map((link, index) => (
                <Box display="flex">
                  {link.displayName === "resume" ? (
                    <a
                      href={link.path}
                      style={{ textDecoration: "none", color: "black" }}
                      download
                    >
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
                    </a>
                  ) : (
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
                  )}
                  {index !== NavigationLinks.length - 1 && (
                    <Divider orientation="vertical" />
                  )}
                </Box>
              ))
            )}
          </Box>
        )}
      </Box>
      {isMobileView && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <Box
            py={1}
            px={2}
            bgcolor={bgColor.primary}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
          >
            {Children.toArray(
              NavigationLinks.map((link) =>
                link.displayName === "resume" ? (
                  <a
                    href={link.path}
                    style={{ textDecoration: "none", color: "black" }}
                    download
                  >
                    <Button
                      sx={{
                        fontSize: "16px",
                        textTransform: "capitalize",
                        color: "black",
                      }}
                    >
                      {link.displayName}
                    </Button>
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Button
                      sx={{
                        fontSize: "16px",
                        textTransform: "capitalize",
                        color: "black",
                      }}
                    >
                      {link.displayName}
                    </Button>
                  </Link>
                )
              )
            )}
          </Box>
        </motion.div>
      )}
      <Outlet />
      <Footer />
    </>
  );
};
