import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import './nav.css'
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { IoIosContact } from "react-icons/io";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <>
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex">
            <span>R..Classes</span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link as={NavLink} to="/" exact activeClassName="active-link" onClick={() => updateExpanded(false)}>
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={NavLink} to="/about" activeClassName="active-link" onClick={() => updateExpanded(false)}>
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={NavLink} to="/courses" activeClassName="active-link" onClick={() => updateExpanded(false)}>
                  <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Courses
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={NavLink} to="/blogs" activeClassName="active-link" onClick={() => updateExpanded(false)}>
                  <CgFileDocument style={{ marginBottom: "2px" }} /> Blogs
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={NavLink} to="/contact" activeClassName="active-link" onClick={() => updateExpanded(false)}>
                  <IoIosContact style={{ marginBottom: "2px" }} /> Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;


// import React, { useState } from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
// // import logo from "../Assets/logo-2.png";
// // import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
// // import { CgGitFork } from "react-icons/cg";
// import './nav.css'
// import {
//   //   AiFillStar,
//   AiOutlineHome,
//   AiOutlineFundProjectionScreen,
//   AiOutlineUser,
// } from "react-icons/ai";

// import { CgFileDocument } from "react-icons/cg";
// import { IoIosContact } from "react-icons/io";
// function NavBar() {
//   const [expand, updateExpanded] = useState(false);
//   const [navColour, updateNavbar] = useState(false);

//   function scrollHandler() {
//     if (window.scrollY >= 20) {
//       updateNavbar(true);
//     } else {
//       updateNavbar(false);
//     }
//   }

//   window.addEventListener("scroll", scrollHandler);

//   return (
//     <>
//       <Navbar
//         expanded={expand}
//         fixed="top"
//         expand="md"
//         className={navColour ? "sticky" : "navbar"}
//       >
//         <Container>
//           <Navbar.Brand href="/" className="d-flex">
//             {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
//             <span>R..Classes</span>
//           </Navbar.Brand>
//           <Navbar.Toggle
//             aria-controls="responsive-navbar-nav"
//             onClick={() => {
//               updateExpanded(expand ? false : "expanded");
//             }}
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </Navbar.Toggle>
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="ms-auto" defaultActiveKey="#home">
//               <Nav.Item>
//                 <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
//                   <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
//                 </Nav.Link>
//               </Nav.Item>

//               <Nav.Item>
//                 <Nav.Link
//                   as={Link}
//                   to="/about"
//                   onClick={() => updateExpanded(false)}
//                 >
//                   <AiOutlineUser style={{ marginBottom: "2px" }} />About
//                 </Nav.Link>
//               </Nav.Item>

//               <Nav.Item>
//                 <Nav.Link
//                   as={Link}
//                   to="/courses"
//                   onClick={() => updateExpanded(false)}
//                 >
//                   <AiOutlineFundProjectionScreen
//                     style={{ marginBottom: "2px" }}
//                   />{" "}
//                   Courses
//                 </Nav.Link>
//               </Nav.Item>

//               <Nav.Item>
//                 <Nav.Link
//                   as={Link}
//                   to="/blogs"
//                   onClick={() => updateExpanded(false)}
//                 >
//                   <CgFileDocument style={{ marginBottom: "2px" }} /> Blogs
//                 </Nav.Link>
//               </Nav.Item>

//               <Nav.Item>
//                 <Nav.Link
//                   as={Link}
//                   to="/contact"
//                   onClick={() => updateExpanded(false)}
//                 >
//                   <IoIosContact style={{ marginBottom: "2px" }} /> Contact
//                 </Nav.Link>
//               </Nav.Item>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default NavBar;
