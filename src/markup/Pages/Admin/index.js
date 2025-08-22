import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link, Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import AddBlog from "../Blog/AddBlog";

import logo from "../../../images/logo.png";
import { ToastContainer } from "react-toastify";
import { menu } from "./menu";
import {
  Collapse,
  List,
  ListItem,
  // ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Blogs from "../Blog/Blogs";
import AddVideo from "./videos/AddVideo";
import Videos from "./videos/Videos";
import { auth, logout } from "../../../firebase";

export function hasChildren(item) {
  const { items: children } = item;

  if (children === undefined) {
    return false;
  }

  if (children.constructor !== Array) {
    return false;
  }

  if (children.length === 0) {
    return false;
  }

  return true;
}

const SingleLevel = ({ item, isChild }) => {
  return (
    <ListItem
      button
      component={Link}
      to={item.to}
      className={`${isChild ? "ml-3" : ""}`}
    >
      {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
      <ListItemText primary={item.title} />
    </ListItem>
  );
};

const MultiLevel = ({ item }) => {
  const { items: children } = item;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <React.Fragment>
      <ListItem button onClick={handleClick}>
        {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
        <ListItemText primary={item.title} />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children.map((child, key) => (
            <MenuItem key={key} item={child} isChild={true} />
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

const MenuItem = ({ item, isChild }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item} isChild={isChild} />;
};

const Admin = () => {
  let { path } = useRouteMatch();
  const [user, authLoading, authError] = useAuthState(auth);

  if (authError) return <div>{authError}</div>;
  if (!authLoading && !user) {
    return <Redirect to="/index-3" />;
  }

  return (
    <>
      <ToastContainer />
      <Row className="vw-100 min-vh-100">
        <Col
          xs={3}
          className="bg-primary text-white d-flex flex-column justify-content-between"
        >
          <div>
            <div className="d-flex align-items-center justify-content-center p-2">
              <img src={logo} alt="" />
            </div>
            <div className="ml-4">
              {menu.map((item, key) => (
                <MenuItem key={key} item={item} />
              ))}
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center p-2">
            <Button onClick={logout}>Logout</Button>
          </div>
        </Col>
        <Col>
          <Switch>
            <Route exact path={path}>
              <Blogs />
            </Route>
            <Route path={`${path}/add-blog`}>
              <AddBlog />
            </Route>
            <Route path={`${path}/blogs`}>
              <Blogs />
            </Route>
            <Route path={`${path}/add-video`}>
              <AddVideo />
            </Route>
            <Route path={`${path}/videos`}>
              <Videos />
            </Route>
          </Switch>
        </Col>
      </Row>
    </>
  );
};

export default Admin;
