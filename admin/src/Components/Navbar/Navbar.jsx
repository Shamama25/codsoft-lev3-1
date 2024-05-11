import "./Navbar.css";
import navlogo from "../../assets/nav_logo.png";
import navProfile from "../../assets/profile-img.jpeg";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navlogo} alt="" className="nav-logo" />
      <img src={navProfile} alt="" className="nav-profile" />
    </div>
  );
};

export default Navbar;
