import "./topbar.css";
import { Search } from "@material-ui/icons";
import { Link } from "react-router-dom";


export default function Topbar() {
  const logout = () => {
    window.localStorage.clear();
    window.location.href = "/login";
  }
  
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">HireMe!</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friends"
            className="searchInput"
          />
        </div>
      </div>
        <div className="topbarRight">
        <div className="topbarLinks">
          <div  onClick={logout} style={{ textDecoration: "none" }}>
          <span className="logout" >Logout</span>
          </div>
        </div>
        </div>
    </div>
  );
}

