import "./Homepage.css";
import Navbar from "../../Component/Navbar/Navbar";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="homepage-container">
      <div>
        <Navbar />
        <div className="hero-text">
          <p>
            <span> Navigate </span>the <span> Algorithm </span> and <br />
            Get better understanding<br />
          </p>
        </div>
        <div className="btns">
          <Link to="/searching">
            <div className="startbtn">Start Visualizing</div>
          </Link>
        </div>
        <footer>
          <p>
            <span className="text-color">Developed By:</span> 
            <a href="https://adarshachaulagain.com.np/" target="_blank">Adarsha Chaulagain</a> 
            <span className="text-color">and</span> 
            <a href="" target="_blank">Sambhawee Acharya</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
