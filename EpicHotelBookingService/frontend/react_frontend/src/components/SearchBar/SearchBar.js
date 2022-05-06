import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import { styles } from "./SearchBarStyle";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import RedeemIcon from "@mui/icons-material/Redeem";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Tooltip } from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Button from "@material-ui/core/Button";
import "./SearchBar.css";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export const SearchBar = (props) => {
  const [anchorEl, setAnchorEl] = useState();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState();
  const [isOpen, setOpen] = useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [value, setValue] = useState(new Date());
  const [checkout, setCheckout] = useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const handleCheckout = (newValue) => {
    setCheckout(newValue);
  };

  const { history, user } = props;

  const logOut = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.75),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 1),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    color: "black",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "black",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const onSearchInputChange = (event) => {
    let value = event.target.value;
    return value;
  };

  const onRewardsClick = () => {};

  return (
    <>
      <Box sx={{ margin: "3rem" }}>
        <AppBar sx={styles} position="static">
          <Toolbar>
            <Search>
              <StyledInputBase
                placeholder="Destination"
                inputProps={{ "aria-label": "search" }}
                onInput={onSearchInputChange}
              />
            </Search>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                className="datepicker"
                label="checkin"
                inputFormat="MM/dd/yyyy"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                className="datepicker"
                label="checkout"
                inputFormat="MM/dd/yyyy"
                value={checkout}
                onChange={handleCheckout}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>

            <Button variant="contained" className="primary-text-btn-search">
              Search
            </Button>
          </Toolbar>
          <Toolbar>
            <Search>
              <StyledInputBase
                placeholder="Rooms & Guests"
                inputProps={{ "aria-label": "search" }}
                onInput={onSearchInputChange}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
