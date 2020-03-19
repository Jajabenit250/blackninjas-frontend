import React from "react";
import { createBrowserHistory } from "history";
import UserProfile from "../components/profile/userProfile.jsx";
import Navlinks from "../components/profile/Nav.links.jsx";
import { Box, TextField, Grid } from "@material-ui/core";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

const history = createBrowserHistory({
  forceRefresh: true
});
export default function SideNavBarPage(props) {
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
        <Grid container justify="center" style={{ marginTop: "2vw" }}>
          <TextField
            id="outlined-search"
            label="Search users"
            type="search"
            variant="outlined"
            size="small"
          />{" "}
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          style={{ marginLeft: "2vw", paddingTop: "10px" }}
        >
          <QuestionAnswerIcon />
          <p style={{ marginLeft: "1vw" }}>
            Public Messages
            <span>3</span>
          </p>
        </Grid>
      </div>
    </Box>
  );
}
