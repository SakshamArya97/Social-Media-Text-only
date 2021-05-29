import "./single.css";
import Topbar from "../../components/topbar/Topbar";
import SinglePost from "../../components/singlePost/SinglePost";

export default function Single() {
  return (
    <div className="single">
    <div className="wrapper">
      <Topbar/>
      <SinglePost className="singlePost"/>
      </div>
    </div>
  );
}