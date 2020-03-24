import React from "react";
import UserProfile from "../components/profile/userProfile.jsx";
import Navlinks from "../components/profile/Nav.links.jsx";
import { Box, TextField, Grid } from "@material-ui/core";

export default function SideNavBarPage({ history, onClick, count }) {
  return (
    <Box style={{ minHeight: "10px", marginBottom: "20px" }}>
      <div className="dashboard_side-nav-bar_logo">
        <img
          className="dashboard_side-nav-bar_logo_image"
          src="https://res.cloudinary.com/dlwzb2uh3/image/upload/v1581003340/barefootnomard/Group_13_jkrk8g.svg"
          alt="logo"
          style={{ cursor: "pointer" }}
        />
      </div>
      <UserProfile />
      <Navlinks />
    </Box>
  );
}
