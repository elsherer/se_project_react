import "./SideBar.css";
import avatar from "../../assets/avatar.svg";

function SideBar() {
  return (
    <div className="sideBar">
      <img src={avatar} alt="Terrence Tegegne" className="sideBar__avatar" />
      <span className="sideBar__username">Terrence Tegegne</span>
    </div>
  );
}

export default SideBar;
