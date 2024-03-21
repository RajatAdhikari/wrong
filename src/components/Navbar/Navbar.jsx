// import React from "react"
// import "./Navbar.css"
// import logo_light from "../../assets/Smartlogo.png"
// import logo_dark from "../../assets/Smartlogo.png"
// import search_icon_light from "../../assets/search-w.png"
// import search_icon_dark from "../../assets/search-b.png"
// import toggle_light from "../../assets/night.png"
// import toggle_dark from "../../assets/day.png"

// const Navbar = ({theme, setTheme}) => {
//   const toggle_mode = ()=> {
//     theme == "light" ? setTheme("dark") : setTheme("light");
//     console.log("clicked");
//   };

//   return (
//     <div className="navbar">
//       <img
//         src={theme == "light" ? logo_light : logo_dark}
//         alt=""
//         className="logo"
//       />
//       <ul>
//         <li>Home</li>
//         <li>Dashboard</li>
//         <li>Product</li>
//         <li>About</li>
//       </ul>
//       <div className="search-box">
//         <input type="text" placeholder="search" />
//         <img src={theme == "light" ? search_icon_light : search_icon_dark}
//           alt="" />
        
//       </div>
//       <img
//         onClick={() => {
//           toggle_mode()
//         }}
//         src={theme == "light" ? toggle_light : toggle_dark}
//         alt=""
//         className="toggle-icon"
//       />
//     </div>
//   );
// };

// export default Navbar

import PropTypes from "prop-types";
import "./Navbar.css";
import logo_light from "../../assets/Smartlogo.png";
import logo_dark from "../../assets/Smartlogo.png";
import search_icon_light from "../../assets/search-w.png";
import search_icon_dark from "../../assets/search-b.png";
import toggle_light from "../../assets/night.png";
import toggle_dark from "../../assets/day.png";

const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
    console.log("clicked");
  };

  return (
    <div className="navbar">
      <img
        src={theme == "light" ? logo_light : logo_dark}
        alt=""
        className="logo"
      />
      <ul>
        <li>Home</li>
        <li>Dashboard</li>
        <li>Product</li>
        <li>About</li>
      </ul>
      <div className="search-box">
        <input type="text" placeholder="search" />
        <img src={theme == "light" ? search_icon_light : search_icon_dark}
          alt="" />
      </div>
      <img
        onClick={() => {
          toggle_mode()
        }}
        src={theme == "light" ? toggle_light : toggle_dark}
        alt=""
        className="toggle-icon"
      />
    </div>
  );
};

Navbar.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default Navbar;
