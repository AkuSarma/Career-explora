import './Home.css';
import { Link } from "react-router-dom";

const Home = () => {
  const knowYourStrengthHerf = `questions`;
  return (
    <div>
      <section className="para">
          <h2>Welcome to Career Exploration</h2>
          <p>Explore different career options, identify your strengths and interests, and plan your future career path with our app.</p>
          <div className="btn">
          <Link to={knowYourStrengthHerf}><button>Know Your strength</button></Link>
          </div>
        </section>
        <section className="featured-careers">
          <h2>Featured Careers</h2>
          <div className="career-list">
            <div className="career-item">
              <h3>Software Developer</h3>
              <p>Develop software applications and programs.</p>
            </div>
            <div className="career-item">
              <h3>Graphic Designer</h3>
              <p>Create visual concepts and designs for various purposes.</p>
            </div>
            <div className="career-item">
              <h3>Registered Nurse</h3>
              <p>Provide care and support to patients in healthcare settings.</p>
            </div>
            <div className="career-item">
              <h3>Marketing Manager</h3>
              <p>Develop marketing strategies and campaigns.</p>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Home