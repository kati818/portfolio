import "./Avatar.css";
import profileImage from "../../assets/img/portfolio-photo.jpeg";

export default function Avatar() {
  return (
    <div className="intro-img-container">
      <img className="img" src={profileImage} alt="Photo of a creator" />
    </div>
  );
}
