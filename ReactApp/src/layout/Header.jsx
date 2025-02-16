import React, { useEffect, useState } from "react";
import { user, utils } from "../utils";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "../components/core";
import logo from "../assets/images/yumverse-logo.png";
import { NavLink, useNavigate } from "react-router-dom";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Recipes",
    path: "/recipes",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
  },
];

const Logo = ({ className }) => {
  return (
    <NavLink
      to="/"
      className={utils.cn(
        "text-[25px] font-Poppins font-[500] text-black",
        className
      )}
    >
      <img alt="logo" src={logo} width={65} height={65} />
    </NavLink>
  );
};

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [nameCode, setNameCode] = useState("");
  const navigate = useNavigate();
  const userData = user.get();

  useEffect(() => {
    if (userData) {
      setNameCode(utils.nameToCode(userData.name));
    }
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="sticky"
      className="border-b dark:border-[#ffffff1c] dark:shadow !bg-white"
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          className="flex justify-between items-center px-4 py-2.5"
        >
          {/* Mobile Nav */}
          <Logo className="max-lg:hidden flex" />
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon className="dark:text-white text-dark" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {routes.map((route, ind) => (
                <MenuItem key={ind} onClick={handleCloseNavMenu}>
                  <NavLink to={route.path}>{route.name}</NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Nav */}
          <Logo className="max-lg:flex hidden" />

          <Box
            sx={{
              gap: "30px",
              display: { xs: "none", md: "flex" },
            }}
          >
            {routes.map((route, ind) => {
              let active =
                window.location.pathname === route.path ? "!border-blue" : "";

              return (
                <NavLink
                  key={ind}
                  to={route.path}
                  className={utils.cn(
                    "text-dark dark:text-white mt-2 pb-1 transition-all border-b-[3px] border-white dark:border-dark hover:border-blue",
                    active
                  )}
                >
                  {route.name}
                </NavLink>
              );
            })}
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            {!userData ? (
              <Button
                onClick={() => navigate("/login")}
                variant="outlined"
                color="primary"
              >
                Login
              </Button>
            ) : (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar label={nameCode} />
                </IconButton>
              </Tooltip>
            )}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseUserMenu();
                  user.logout();
                }}
              >
                <Typography sx={{ textAlign: "center" }}>Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
