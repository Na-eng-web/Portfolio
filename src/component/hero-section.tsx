import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Children } from "react";
import { Link } from "react-router-dom";
import { IconPhoto } from "../assets";
import { NavigationLinks, bgColor } from "../profile";
import Mediaquery from "./medial-queries";
export const HeroSection = () => {
  const { isMobileView, isTabletView } = Mediaquery();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <Box
        display="flex"
        minHeight={isMobileView ? "80vh" : "100vh"}
        bgcolor={bgColor.primary}
        px={5}
        alignItems="center"
        flexDirection={
          isMobileView ? "column" : isTabletView ? "column" : "row"
        }
      >
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            borderRadius="50%"
            width={isMobileView ? "80%" : isTabletView ? "60%" : "30rem"}
            maxWidth="100%"
            overflow="hidden"
            border={2}
            sx={{
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
            }}
          >
            <img src={IconPhoto} width="100%" height="100%" />
          </Box>
        </Box>
        <Box width="100%" textAlign={isTabletView ? "center" : "left"} mt={3}>
          <Box>
            <Typography
              fontSize={isMobileView ? "40px" : "100px"}
              fontWeight={600}
              lineHeight={isMobileView ? "40px" : "100px"}
            >
              Hello
            </Typography>
            <Typography fontSize={isMobileView ? "18px" : "22px"}>
              A Bit About Me
            </Typography>
            <Typography fontWeight={300}>
              A trustworthy, hardworking and team playing individual, who is
              curious to learn new things and discover new and interesting
              approaches to things. A keen observer of his surroundings and an
              ardent tech and automobiles fan. Will surely be an asset to the
              company.
            </Typography>
          </Box>
          <Box
            display="flex"
            gap={2}
            my={1}
            justifyContent={isTabletView ? "center" : "flex-start"}
          >
            {Children.toArray(
              NavigationLinks.map((link, index) =>
                link.displayName === "resume" ? (
                  <a
                    href={link.path}
                    style={{ textDecoration: "none", color: "black" }}
                    download
                  >
                    <motion.div
                      initial={{ x: "-100vw" }}
                      animate={{ x: 0, y: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 40,
                        damping: 12,
                        delay: 0.6 * index,
                      }}
                    >
                      <Box
                        height={isMobileView ? "6rem" : "8rem"}
                        width={isMobileView ? "6rem" : "8rem"}
                        maxWidth={isMobileView ? "6rem" : "8rem"}
                        border={1}
                        borderRadius="50%"
                        display="flex"
                        alignItems="center"
                        bgcolor={link.bgColor}
                        justifyContent="center"
                        sx={{
                          ":hover": {
                            bgcolor: "white",
                            transition: "background-color 0.5s ease-in-out",
                          },
                          boxShadow:
                            "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
                        }}
                      >
                        {link.displayName === "resume" ? (
                          <a
                            href={link.path}
                            style={{ textDecoration: "none", color: "black" }}
                            download
                          >
                            <Typography textTransform="capitalize">
                              {link.displayName}
                            </Typography>
                          </a>
                        ) : (
                          <Link
                            to={link.path}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <Typography textTransform="capitalize">
                              {link.displayName}
                            </Typography>
                          </Link>
                        )}
                      </Box>
                    </motion.div>
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <motion.div
                      initial={{ x: "-100vw" }}
                      animate={{ x: 0, y: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 40,
                        damping: 12,
                        delay: 0.6 * index,
                      }}
                    >
                      <Box
                        height={isMobileView ? "6rem" : "8rem"}
                        width={isMobileView ? "6rem" : "8rem"}
                        maxWidth={isMobileView ? "6rem" : "8rem"}
                        border={1}
                        borderRadius="50%"
                        display="flex"
                        alignItems="center"
                        bgcolor={link.bgColor}
                        justifyContent="center"
                        sx={{
                          ":hover": {
                            bgcolor: "white",
                            transition: "background-color 0.5s ease-in-out",
                          },
                          boxShadow:
                            "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
                        }}
                      >
                        {link.displayName === "resume" ? (
                          <a
                            href={link.path}
                            style={{ textDecoration: "none", color: "black" }}
                            download
                          >
                            <Typography textTransform="capitalize">
                              {link.displayName}
                            </Typography>
                          </a>
                        ) : (
                          <Link
                            to={link.path}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <Typography textTransform="capitalize">
                              {link.displayName}
                            </Typography>
                          </Link>
                        )}
                      </Box>
                    </motion.div>
                  </Link>
                )
              )
            )}
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};
