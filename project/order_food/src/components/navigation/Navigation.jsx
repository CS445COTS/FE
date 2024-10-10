import React, { useEffect, useState } from "react";
import logo from "../../Assets/images/logoo.png";
import "./Navigation.css";
import AuthModal from "../../Auth/AuthModal";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "../../State/Auth/Action";
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [inputSearch, setInputSearch] = useState(false);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);
  const navigate = useNavigate();
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  const location = useLocation();
  const jwt = localStorage.getItem("jwt");

  const handleOpen = () => {
    setOpenAuthModal(true);
  };
  const handleClose = () => {
    setOpenAuthModal(false);
  };
  const handleCloseUserMenu = (event) => {
    setAnchorEl(null);
  };
  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleCloseUserMenu();
  };

  useEffect(() => {
    if (auth.jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt]);

  useEffect(() => {
    if (auth.user) {
      handleClose();
    }
    if (location.pathname === "/login" || location.pathname === "/register") {
      handleClose();
      navigate(-1);
    }
  }, [jwt, auth.jwt]);

  return (
    <div>
      <header>
        <div class="container">
          <div class="row-flex">
            <div class="header-logo">
              <img src={logo} alt="" />
            </div>
            <div class="header-nav active">
              <nav>
                <ul>
                  <li>
                    <a href="#">Trang Chủ</a>
                  </li>
                  <li>
                    <a href="#">Thực Đơn</a>
                  </li>
                  <li>
                    <a href="#">Bài Viết </a>
                  </li>
                  <li>
                    <a href="#">Dịch Vụ</a>
                  </li>
                  <li>
                    <a href="#">Liên Hệ</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                {/* search */}
                <div className="flex items-center lg:ml-6">
                  <p className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>

                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </p>
                </div>
                {/* cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Button className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"></span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Button>
                </div>
                {auth.user ? (
                  <div>
                    <Avatar
                      className="text-white"
                      onClick={handleUserClick}
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      // onClick={handleUserClick}
                      sx={{
                        bgcolor: deepPurple[500],
                        color: "white",
                        cursor: "pointer",
                      }}
                    >
                      {auth.user?.firstName[0].toUpperCase()}
                    </Avatar>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={openUserMenu}
                      onClose={handleCloseUserMenu}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem>Profile</MenuItem>
                      <MenuItem onClick={""}>My Orders</MenuItem>
                      <MenuItem></MenuItem>
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                  </div>
                ) : (
                  <Button
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    onClick={handleOpen}
                  >
                    Signin
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      <AuthModal handleClose={handleClose} open={openAuthModal} />
    </div>
  );
}
