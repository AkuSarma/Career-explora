import './Home.css';
import { Link } from "react-router-dom";
import JobTitleCard from '../components/JobTitleCard';

const Home = () => {
  const knowYourStrengthHerf = `questions`;
  const jobTitles = [
    "Software Developer (Full Stack, Front-End, Back-End, Android, iOS)",
    "Cloud Architect",
    "Data Scientist",
    "Cybersecurity Specialist",
  ];
  return (
    <div>
      <section className="para">
        <h2>Welcome to Career Exploration</h2>
        <p>
          Explore different career options, identify your strengths and
          interests, and plan your future career path with our app.
        </p>
        <div className="btn">
          <Link to={knowYourStrengthHerf}>
            <button>Self Assess</button>
          </Link>
        </div>
      </section>
      <section className="featured-careers">
        <h2>Featured Careers</h2>
        <div className="career-list">
          {jobTitles.map((role) => (
            <JobTitleCard role={role} key={role} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home