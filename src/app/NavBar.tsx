"use client";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function NavBar() {
  // const router = useRouter();
  const pathName = usePathname();
  // useSearchParams();
  return (
    <Navbar
      className={"d-flex justify-content-center"}
      bg={"primary"}
      variant={"dark"}
      sticky={"top"}
      expand={"sm"}
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand as={Link} href={"/"}>
          NEXT-JS Image Gallery
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav>
            <Nav.Link as={Link} href={"/hello"} active={pathName === "/hello"}>
              Hello
            </Nav.Link>
            <Nav.Link
              as={Link}
              href={"/static"}
              active={pathName === "/static"}
            >
              Static
            </Nav.Link>
            <Nav.Link
              as={Link}
              href={"/dynamic"}
              active={pathName === "/dynamic"}
            >
              Dynamic
            </Nav.Link>
            <Nav.Link as={Link} href={"/ISR"} active={pathName === "/ISR"}>
              ISR
            </Nav.Link>
            <NavDropdown title={"Topics"} id={"topics-dropdown"}>
              <NavDropdown.Item as={Link} href={"/topics/health"}>
                Health
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href={"/topics/coding"}>
                Coding
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href={"/topics/fitness"}>
                Fitness
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href={"/topics/travel"}>
                Travel
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={Link}
              href={"/search"}
              active={pathName === "/search"}
            >
              Search
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
