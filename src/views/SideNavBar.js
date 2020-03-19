import React from "react";
import { createBrowserHistory } from "history";
import UserProfile from "../components/profile/userProfile.jsx";
import Navlinks from "../components/profile/Nav.links.jsx";
import { Box, TextField, Grid } from "@material-ui/core";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const history = createBrowserHistory({
  forceRefresh: true
});

const useStyles = makeStyles(theme => ({
  count: {
    width: "18px",
    height: "18px",
    marginLeft: "1vw",
    borderRadius: "50%",
    background: "#0094FF",
    fontWeight: 500,
    fontSize: "10px",
    textAlign: "center",
    lineHeight: "11px",
    color: "white",
    padding: "4px"
  },
  grid: {
    width: "100%",
    marginLeft: "1vw",
    marginTop: "10px",
    paddingLeft: "9px",
    "&:hover": {
      background: "#F1F1F1",
      cursor: "pointer"
    }
  }
}));
export default function SideNavBarPage(props) {
  const classes = useStyles();
  return (
    <Box style={{ minHeight: "10px", marginBottom: "20px" }}>
      <div className="dashboard_side-nav-bar_logo">
        <img
          className="dashboard_side-nav-bar_logo_image"
          src="https://res.cloudinary.com/dlwzb2uh3/image/upload/v1581003340/barefootnomard/Group_13_jkrk8g.svg"
          alt="logo"
          style={{ cursor: "pointer" }}
          onClick={() => history.push("/")}
        />
      </div>
      <div style={{ display: props.history ? "none" : "" }}>
        <UserProfile />
        <Navlinks />
      </div>
      <div style={{ display: props.history ? "block" : "none" }}>
        <Grid
          container
          justify="center"
          fullWidth={true}
          style={{ marginTop: "2vw", marginLeft: "3px", width: "97%" }}
        >
          <TextField
            id="outlined-search"
            label="Search users"
            type="search"
            variant="outlined"
            size="small"
            fullWidth={true}
          />{" "}
        </Grid>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          className={classes.grid}
        >
          <QuestionAnswerIcon />
          <p style={{ marginLeft: "1vw" }}>Public Messages</p>
          <div className={classes.count}>3</div>
        </Grid>
      </div>
    </Box>
  );
}
