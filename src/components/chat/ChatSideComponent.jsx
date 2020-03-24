import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, TextField, Grid } from "@material-ui/core";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  count: {
    width: "18px",
    height: "18px",
    marginLeft: "3vw",
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
    marginLeft: "0px",
    marginTop: "10px",
    paddingLeft: "9px",
    "&:hover": {
      background: "#F1F1F1",
      cursor: "pointer"
    }
  }
}));
export const ChatSideComponent = ({ onClick, showChat }) => {
  const publicMessages = useSelector(state => state.chatReducer.publicMessages);
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <Grid
      style={{
        display: showChat ? "none" : "block",
        height: "92vh",
        width: "100%",
        backgroundColor: "white",
        paddingTop: "20px",
        paddingBottom: "20px",
        boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",
        ["@media (maxWwidth:780px)"]: {
          width: "100%"
        }
      }}
    >
      <Grid container justify="center" alignItems="center">
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
        onClick={onClick}
      >
        <QuestionAnswerIcon />
        <p style={{ marginLeft: "1vw" }}>Public Messages</p>
        <div
          style={{
            display: publicMessages.count === 0 ? "none" : "block"
          }}
          className={classes.count}
        >
          {publicMessages.count}
        </div>
      </Grid>
    </Grid>
  );
};
