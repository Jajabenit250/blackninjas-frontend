import React, { useState, useEffect } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Box, Divider, Grid, Hidden } from "@material-ui/core";
import { ChatSideComponent } from "./ChatSideComponent.jsx";
import { ChatComponent } from "./ChatComponent.jsx";
import { findRenderedDOMComponentWithTag } from "react-dom/test-utils";

export const Chat = () => {
  const [showChat, setShowChat] = useState(false);

  const displayChatComponent = () => {
    setShowChat(true);
  };
  const handleBackButton = () => {
    setShowChat(false);
  };
  const matches = useMediaQuery(theme => theme.breakpoints.up("lg"));
  useEffect(() => {
    if (matches) {
      setShowChat(true);
    }
  });
  return (
    <>
      <Hidden mdDown>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "239px 3fr"
          }}
        >
          <ChatSideComponent onClick={displayChatComponent} />
          <ChatComponent showChat={showChat} removeIcon={true} />
        </div>
      </Hidden>
      <Hidden lgUp>
        <div
          style={{
            width: "100%"
          }}
        >
          <ChatSideComponent
            onClick={displayChatComponent}
            showChat={showChat}
          />
          <ChatComponent showChat={showChat} backButton={handleBackButton} />
        </div>
      </Hidden>
    </>
  );
};
