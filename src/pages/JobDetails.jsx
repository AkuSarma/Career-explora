import { useParams } from "react-router-dom";
import './JobDetails.css'

const JobDetails = ({ match }) => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="JobDetails">
      <h3>Job title: {id}</h3>
      <p>
        Details: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Labore ratione saepe velit vitae quo ut, incidunt porro culpa excepturi
        natus dignissimos atque laborum explicabo expedita?
      </p>
      <h3>Required Qualifications:</h3>
      <ul>
        <li>Graduate</li>
        <li>Technical Skills</li>
        <li>Communications skills</li>
      </ul>
    </div>
  );
};

export default JobDetails;
