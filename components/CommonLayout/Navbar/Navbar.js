import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
import { useRouter } from "next/router";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import Link from "next/link";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const router = useRouter();

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}>
      <Container>
        <span className="namebrand">SF.</span>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}>
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Link href="/">
                <a
                  className={`navitem ${
                    router.pathname === "/" ? "active" : ""
                  }`}>
                  <AiOutlineHome /> home
                </a>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/about">
                <a
                  className={`navitem ${
                    router.pathname === "/about" ? "active" : ""
                  }`}>
                  <AiOutlineUser /> About
                </a>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/projects">
                <a
                  className={`navitem ${
                    router.pathname === "/projects" ? "active" : ""
                  }`}>
                  <AiOutlineFundProjectionScreen /> projects
                </a>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/resume">
                <a
                  className={`navitem ${
                    router.pathname === "/resume" ? "active" : ""
                  }`}>
                  <CgFileDocument /> resume
                </a>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
