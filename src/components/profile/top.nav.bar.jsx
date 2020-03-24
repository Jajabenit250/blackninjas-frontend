import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import NotificationPane from "../notification/notificationPane.jsx";
import { connect } from "react-redux";
import { GetNotifications } from "../../actions/notificationPane";

const style = {
  borderRadius: "50%",
  height: "20px",
  width: "20px",
  backgroundColor: "#0094FF",
  display: "grid",
  justifyItems: "center",
  fontSize: "12px",
  alignItems: "center",
  color: "#FFF",
  float: "right"
};
const { location } = createBrowserHistory();

export class TopNavBar extends Component {
  state = {
    notificationCounter: 0,
    notification: "",
    changeSideNav: false
  };
  count = notifications => {
    let count = 0;
    notifications.map((notification, index) => {
      if (!notification.read) {
        count += 1;
      }
    });

    if (count === 0) {
      return false;
    } else if (count > 9) {
      return "9+";
    } else {
      return count;
    }
  };

  render() {
    const { notifications, count } = this.props;
    console.log(count);
    return (
      <>
        {notifications && (
          <Box width={100 / 100} display="flex" justifyContent="flex-end">
            <Box pr={1} style={{ marginTop: "10px", cursor: "pointer" }}>
              <Link to="/messages">
                <img
                  src="https://res.cloudinary.com/dby88h516/image/upload/v1580893608/email_1_jupvlq.svg"
                  width="100%"
                  height="24px"
                />
                <div
                  style={{
                    display: count > 0 ? "block" : "none",
                    position: "absolute",
                    top: "16px",
                    right: "65px",
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
                  }}
                >
                  {count && count > 0 ? count : 0}
                </div>
              </Link>
            </Box>
            <Box pl={1} style={{ marginTop: "10px" }}>
              <PopupState
                style={{ width: "50%" }}
                variant="popover"
                popupId="demo-popup-popover"
              >
                {popupState => (
                  <div>
                    <Box
                      className="notificationsIcon"
                      {...bindTrigger(popupState)}
                      style={{
                        width: "35px",
                        height: "25px",
                        cursor: "pointer"
                      }}
                    >
                      {this.count(this.props.notifications) && (
                        <div style={style}>
                          {this.count(this.props.notifications)}
                        </div>
                      )}
                    </Box>

                    <NotificationPane
                      bindPopover={bindPopover(popupState)}
                      options={this.props.notifications}
                    />
                  </div>
                )}
              </PopupState>
            </Box>
          </Box>
        )}
      </>
    );
  }
}

export const mapStateToProps = state => {
  const data = state.NotificationReducer.Notifications;

  return {
    notifications: data
  };
};

const connected = connect(mapStateToProps, { GetNotifications })(TopNavBar);
export default connected;
