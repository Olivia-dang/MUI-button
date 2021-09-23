import React, { FunctionComponent } from "react";
import { Button } from "./Button";
import sakuraPic from "../public/sakura.png";

import { styled, alpha } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

interface HeaderProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

const useStyles = makeStyles({
  root: {
    size: "large",
    mr: 2,
  },
});
const useTypoStyles = makeStyles({
  root: {
    flexGrow: 1,
    xs: "none",
    sm: "block",
  },
});

export const Header: FunctionComponent = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => {
  const iconClasses = useStyles();
  const typoClasses = useTypoStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img className="image" width="32" height="32" src={sakuraPic} />
          <IconButton
            className={iconClasses.root}
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className={typoClasses.root}
            variant="h6"
            noWrap
            component="div"
          >
            Sakura Wedding
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <div>
            {user ? (
              <Button size="small" onClick={onLogout} label="Log out" />
            ) : (
              <>
                <Button size="small" onClick={onLogin} label="Log in" />
                <Button
                  size="small"
                  onClick={onCreateAccount}
                  label="Sign up"
                />
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

//    <header>
//   <div className="wrapper">
//     <div>
//       <div>
//         <img className="image" width="32" height="32" src={sakuraPic} />
//         <h1>Acme</h1>
//       </div>
//       <div>
//         <ul>
//           <li></li>
//         </ul>
//       </div>
//     </div>
//     <div>
//       {user ? (
//         <Button size="small" onClick={onLogout} label="Log out" />
//       ) : (
//         <>
//           <Button size="small" onClick={onLogin} label="Log in" />
//           <Button size="small" onClick={onCreateAccount} label="Sign up" />
//         </>
//       )}
//     </div>
//   </div>
// </header>
