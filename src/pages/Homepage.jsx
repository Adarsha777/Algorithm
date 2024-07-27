import "./Homepage.css"

export const Home = () => {
  return (
    <div className="homepage-container">
      <div>
        <div className="hero-text">
          <p>
            <span> Navigate </span>the <span> Algorithm </span> and <br />
            Get better understanding<br />
          </p>
        </div>
        <div className="btns">
            <div className="startbtn">Start Visualizing</div>
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
