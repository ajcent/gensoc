import { Link } from "react-router-dom";
import "./index.css";

const Banner = () => {
  return (
    <div className="banner">
      <p>
        Visit the Newer Version (WIP){" "}
        <Link to="https://gensoc-v2.vercel.app" className="banner-link">
          Here
        </Link>
      </p>
    </div>
  );
};

export default Banner;
