import React from "react";
import { useState, useEffect } from "react";
import { Drawer, IconButton, Divider, List } from "@mui/material";
import { ChevronLeft, Add } from "@mui/icons-material";
import { minHeight } from "@mui/system";
import ProjectList from "./ProjectList";

export default function ProjectArea(props) {
  const [drawerWidth, setDrawerWidth] = useState(350);
  function handleResize() {
    if (window.innerWidth <= 600) {
      setDrawerWidth(window.innerWidth);
    } else if (drawerWidth !== 350) {
      setDrawerWidth(350);
    }
  }
  window.addEventListener("resize", handleResize);
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      className="drawer"
      variant="persistent"
      anchor="left"
      open={props.drawerIsOpen}
    >
      <div className="drawer-header">
        <Add className="add-btn"></Add>
        <span>Projects</span>
        <IconButton onClick={props.closeDrawer}>
          <ChevronLeft />
        </IconButton>
      </div>
      <Divider></Divider>
      <ProjectList
        currProject={props.currProject}
        chooseProject={props.chooseProject}
      ></ProjectList>
    </Drawer>
  );
}
