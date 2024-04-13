"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { IconButton, Stack } from "@mui/material";

import logo from "@/assets/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";

import Image from "next/image";
import Link from "next/link";
import Header from "./Header";

const navItems = [
  { route: "Home", pathname: "/" },
  { route: "Pages", pathname: "/pages" },
  { route: "Category", pathname: "/category" },
  { route: "News", pathname: "/news" },
  { route: "Post", pathname: "/post" },
  { route: "Contact", pathname: "/contact" },
];

const Navbar = () => {
  return (
    <>
      <Header />
      <AppBar position="static" className="bg-black">
        <Container>
          <Toolbar disableGutters>
            <Image src={logo} alt="logo" width={100} height={100} priority />
            <Box className="w-full text-center">
              {navItems.map((item) => (
                <Link key={item.route} href={item.pathname}>
                  <Button className="text-white">{item.route}</Button>
                </Link>
              ))}
            </Box>
            <Box>
              <Stack
                direction="row"
                sx={{
                  "& svg": {
                    color: "white",
                  },
                }}
              >
                <IconButton>
                  <FacebookIcon />
                </IconButton>
                <IconButton>
                  <FacebookIcon />
                </IconButton>
                <IconButton>
                  <FacebookIcon />
                </IconButton>
                <IconButton>
                  <FacebookIcon />
                </IconButton>
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Navbar;
